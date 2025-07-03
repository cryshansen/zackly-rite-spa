import { useSearchParams, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";


export function generateConfirmationPdf(details) {
  const {
    firstname,
    lastname,
    email,
    phone,
    date,
    time,
    confirmationNumber,
  } = details;

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Appointment Confirmation", 20, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${firstname} ${lastname}`, 20, 40);
  doc.text(`Email: ${email}`, 20, 50);
  doc.text(`Phone: ${phone}`, 20, 60);
  doc.text(`Date: ${date}`, 20, 70);
  doc.text(`Time: ${time}`, 20, 80);
  doc.text(`Confirmation #: ${confirmationNumber}`, 20, 90);

  doc.setFontSize(10);
  doc.text("Thank you for booking with Zackly-Rite Massage Therapy.", 20, 110);

  doc.save("appointment-confirmation.pdf");
}

export default function BookingConfirmation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const bdate = searchParams.get("bdate") || "N/A";
  const time = searchParams.get("time") || "N/A";
  const email = searchParams.get("email") || "client@example.com";
  const fname = searchParams.get("fname") || "First";
  const name = searchParams.get("name") || "Last";
  const confirmno = searchParams.get("confirmno") || Math.floor(Math.random() * 1000000);

  const handleSignOut = () => {
    alert("Great! See you soon.");
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="container my-5">
      <h3>Confirmation</h3>
      <hr />
      <h4 className="text-center">Zackly-Rite Massage Therapy</h4>

      <div className="row justify-content-center my-4">
        <h6 className="text-center">Appointment Booked for</h6>
        <h5 className="text-center pb-3">
          {fname} {name}
        </h5>
        <button
          className="btn btn-secondary"
          onClick={() =>
            generateConfirmationPdf({
              firstname: searchParams.get("fname"),
              lastname: searchParams.get("name"),
              email: searchParams.get("email"),
              phone: searchParams.get("phone"),
              date: searchParams.get("bdate"),
              time: searchParams.get("time"),
              confirmationNumber: searchParams.get("confirmno"),
            })
          }
        >
          Download Confirmation (PDF)
        </button>
      </div>

      <div className="border rounded p-3 mb-3">
        <h5>Booked Appointment</h5>
        <p className="text-muted mb-1">
          Time: <strong>{bdate} {time}</strong>
        </p>
      </div>

      <div className="border rounded p-3 mb-3">
        <h5>Confirmation Message</h5>
        <p className="text-muted mb-1">
          Your confirmation number is: <strong>{confirmno}</strong>.
          <br />You will be emailed with your appointment booking details.
        </p>
      </div>

      <div className="border rounded p-3 mb-3">
        <h5>Emailed</h5>
        <p className="text-muted mb-1">
          Booking confirmation has been sent to <strong>{email}</strong>
        </p>
      </div>

      <div className="modal-footer d-flex flex-column justify-content-center border-0">
        <p className="text-muted">See you soon!</p>
        <button onClick={handleSignOut} className="btn btn-primary mt-2">
          Sign out
        </button>
      </div>
    </div>
  );
}
