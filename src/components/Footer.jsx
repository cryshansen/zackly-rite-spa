export default function Footer() {
  return (
    <footer className="fluid-container" style={{ marginTop: '2rem' }}>
      <div className="olivebk_footer" >
          <div className="row">
            <div className="col-md-3">
              <h6>Zackly-Rite Massage Therapy</h6>
              <ul style={{listStyle:'none'}}>
                <li>812 Park Ave, Esterhazy, Sk S0A 0X0</li>
                <li><i className="fas fa-phone-alt"></i> 306 745-9085</li>
                <li><i className="fas fa-envelope"></i> zacklyrite@sasktel.net</li>
              </ul>
            </div>
            <div className="col-md-6">
                <img src="images/leafLogo_footer.png" />
              
            </div>
            <div className="col-md-3">
              <ul className="social">
                <li><i className="fab fa-facebook-f"></i></li>
                <li><a href="https://www.instagram.com/zacklyrite/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://ca.linkedin.com/in/aura-zack-3228b6a3" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
              <ul>
              <li>&copy; 1997 Zackly-Rite. All Rights Reserved.</li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
}
