import MainImg from "../../images/chooseUs/main.png";
import Box1 from "../../images/chooseUs/icon1.png";
import Box2 from "../../images/chooseUs/icon2.png";
import Box3 from "../../images/chooseUs/icon3.png";
import './chooseus.css';
function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Pourquoi nous choisir</h4>
                <h2>Nous transformons la façon dont le monde bouge.</h2>
                <p>
                Nous créons des expériences que nos clients adorent en dépassant leurs attentes pour une mobilité meilleure, plus pratique, durable et passionnante. EXPECT BETTER est ce qui nous motive.
                </p>
                <a href="#home">
                Plus de détails &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Traversée du pays</h4>
                    <p>
                    Faites passer votre expérience de conduite au niveau supérieur avec nos véhicules haut de gamme pour vos aventures à travers le pays.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tarif tout compris</h4>
                    <p>
                    Obtenez tout ce dont vous avez besoin à un prix pratique et transparent grâce à notre politique de prix tout compris.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pas de frais cachés</h4>
                    <p>
                    Ayez l'esprit tranquille grâce à notre politique sans frais cachés. Nous croyons en une tarification transparente et honnête.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
