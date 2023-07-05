import Img1 from "../../images/download/appstore.svg";
import Img2 from "../../images/download/googleapp.svg";
import './download.css';
function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Téléchargez notre application pour en tirer le meilleur parti</h2>
            <p>
            Optimisez votre expérience de location de voitures en téléchargeant notre 
            application dès maintenant. Parcourez notre vaste catalogue, réservez facilement, 
            profitez d'offres exclusives et suivez votre réservation en temps réel. Économisez 
            du temps et de l'énergie avec notre processus de réservation simplifié. Bénéficiez 
            de tarifs avantageux et de promotions réservées aux utilisateurs de l'application. 
            Téléchargez maintenant et vivez une expérience de location de voitures exceptionnelle !
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
