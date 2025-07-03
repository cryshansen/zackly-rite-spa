import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import useCaptcha from "../hooks/useCaptcha";

import "./available-times.css"; // custom styling if needed

export default function AvailableTimes() {
  const [searchParams] = useSearchParams();
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [bdate, setBdate] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { captchaRef, captchaId } = useCaptcha();
  //const [isLoading, setIsLoading] = useState(false);
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    showLoader();
    const date = searchParams.get("bdate");
    if (!date) return;

    setBdate(date);

    const [year, month, day] = date.split("-");
    const dateObj = new Date(year, month - 1, day);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const displayDate = `${months[dateObj.getMonth()]} ${day}, ${year}`;
    setFormattedDate(displayDate);

    fetch(`${baseUrl}/api/index-bookit.php/bookit/available?date=${date}`)
        .then(res => res.json())
        .then(res => {
          console.log("Raw response:", res);
          const data = Array.isArray(res) ? res : [res];
          const times = data.map(r => r.timeslot);
          console.log('timeslots:times: ' + times);
          setAvailableTimes(times); // make sure you define this
          setIsLoading();
        })
        .catch(err => console.error("Error loading times:", err));
        hideLoader();

    }, [searchParams]);

    const handleBooking = async () => {
        //const gctoken = document.getElementById("g-recaptcha-response")?.value; //seems to work in this case
        const gctoken = captchaId !== null ? window.grecaptcha?.getResponse(captchaId) : "";
        
        console.log();
        const cotoken = getToken();
        const bookdatetime = `${bdate} ${selectedTime}`;
        const url = `${baseUrl}/api/index-bookit.php/bookit/book`;
        if (!selectedTime) {
            alert("Please select a time slot.");
            return;
        }

        if (!gctoken) {
            alert("Please complete the CAPTCHA.");
            return;
        }
        const postData = {
          id: null,
          date: bookdatetime,
          timeslot: `${selectedTime}:00`,
          cotoken,
          gctoken,
        };
          console.log("postData!", postData);

        try {
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
          });

          const data = await res.json();
          console.log("Booked!", data);

          navigate(`/booking?bdate=${bdate}&time=${selectedTime}&cotoken=${cotoken}`);

        } catch (error) {
          console.error("Booking failed", error);
          alert("Something went wrong. Please try again.");
        } finally {
           //hideLoader(); // stop spinner
        }
    };

  const getToken = () => {
    return Math.random().toString().split(".")[1];
  };

  return (
    <div className="container">
      <div className="header mt-5">
        <h3>What's Available</h3>
      </div>
      <hr />
      <div className="content_bod">
        <h3>{formattedDate}</h3>
        <h4>Available Appointments:</h4>

        <p>Morning</p>
        <div className="row">
          {["09:00", "10:30"].map((time, i) => (
            <div className="col-sm-2" key={time}>
              <input
                type="radio"
                id={`control_0${i + 1}`}
                name="select"
                value={time}
                disabled={availableTimes.includes(time)}
                onChange={() => setSelectedTime(time)}
              />
              <label htmlFor={`control_0${i + 1}`}>{time}</label>
            </div>
          ))}
        </div>

        <p>Afternoon</p>
        <div className="row">
          {["13:00", "14:30", "16:00", "17:15"].map((time, i) => (
            <div className="col-sm-2" key={time}>
              <input
                type="radio"
                id={`control_0${i + 3}`}
                name="select"
                value={time}
                disabled={availableTimes.includes(time)}
                onChange={() => setSelectedTime(time)}
              />
              <label htmlFor={`control_0${i + 3}`}>{time}</label>
            </div>
          ))}
        </div>

        {/* Google Recaptcha (if needed) */}
         <div className="g-recaptcha mt-3 mb-3 " ref={captchaRef}  data-action="Booking"></div>

        <div className="row mt-4">
          <div className="col"></div>
          <div className="col center">
            <button className="btn btn-primary" title="Select a time!" onClick={handleBooking} disabled={ !selectedTime || !captchaId} >
              Book it!
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
