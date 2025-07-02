export default function Header() {
  return (

    <header className="fluid-container">
        <div className="container">
            <div className="heading d-flex flex-column flex-md-row align-items-center">
                <img src="images/leafLogo.jpeg" className="img-fluid me-md-3 mb-2 mb-md-0" alt="Zackly-rite Logo" />
                <div className="nameblock text-center text-md-start">
                    <h2 className="olive">ZACKLY-RITE</h2>
                    <h4 className="turquois">massage therapy</h4>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-around olivebk bar">
            <ul className="barLinkCntr list-unstyled d-flex gap-3 justify-content-center m-0">
                <li>Heal.</li>
                <li>Move.</li>
                <li>Restore.</li>
            </ul>
        </div>
    </header>
  );
}