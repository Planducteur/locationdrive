import './footer.css';



function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>LocationDrive</span>
              </li>
              <li>
              Nous proposons une large gamme de véhicules pour tous vos besoins de conduite. Nous avons la voiture parfaite pour répondre à vos besoins.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; 12 34 56 78 90
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  locationdrive@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; locationdrive@gmail.com
                </a>
              </li>


              <li>
                <a
                  href="https://xpeedstudio.com/"
                >
                  &nbsp;<strong>Design by XpeedStudio</strong> 
                </a>
              </li>


              

            </ul>

            <ul className="footer-content__2">
              <li>Société</li>
              <li>
                <a href="#home">Accueil</a>
              </li>
              <li>
                <a href="#home">Carrières</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Actualités</a>
              </li>
              <li>
                <a href="#home">Comment travaillons-nous</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Heures d'ouverture</li>
              <li>Lun - Ven: 8H - 19H</li>
              <li>Sam: 10H - 16H</li>
              <li>Dim: Fermé</li>
            </ul>

            <ul className="footer-content__2">
              <li>Souscription</li>
              <li>
                <p>Abonnez-vous à votre adresse e-mail pour les dernières nouvelles et mises à jour.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Soumettre</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
