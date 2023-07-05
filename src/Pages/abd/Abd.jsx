import {
  HeroPages,
  PlanTrip,
  Footer,
} from "../../components/index.js";

import AboutMain from "../../images/about/about-main.jpg";
import Box1 from "../../images/about/icon1.png";
import Box2 from "../../images/about/icon2.png";
import Box3 from "../../images/about/icon3.png";
import './about.css';
function Abd() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="À propos" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>À propos de l'entreprise</h3>
              <h2>Vous démarrez le moteur et votre aventure commence</h2>
              <p>
              Sûr, mais elle, mais la timidité pourquoi la maison. Le gars met l'instrument
monsieur les supplications offensantes. Prétendu voir cordialement l'exquis vous. Semaines calmes énervantes ou à qui. Immobile si pas
offense pas de précaution. Je me suis laissé aller à l'absence
fortement assisté.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Types de voitures</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>90</h4>
                    <p>Points de location</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" />
                  <span>
                    <h4>75</h4>
                    <p>Atelier de réparation</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Réservez une voiture en nous contactant</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>+33 12-34-56-78-69</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Abd;
