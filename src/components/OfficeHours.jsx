import Calendar from './Calendar';


export default function OfficeHours() {
  return (
    <>
    <section id="booking-section" className="mb-5">
        <div className="row">
            <div className="col-lg-6">
                <div className="officeHrs">
                    <h4 className="turquois">Office Hours <span className="small">( BY APPOINTMENT ONLY)</span></h4>
                    <ul>
                        <li>Monday: 9 – 6:00</li>
                        <li>Tuesday: 9 – 6:00</li>
                        <li>Wednesday : 9 – 6:00</li>
                        <li>Thursday: 9 – 6:00</li>
                        <li>Friday: 9 – 5:00</li>
                        <li>Closed Saturday, Sunday &amp; Holidays</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6"> 
                <Calendar/>
            </div>
        </div>	
    </section>
    </>
  );
}
