import SelectCar from "../../images/plan/icon1.gif";
import Contact from "../../images/plan/icon2.gif";
import Drive from "../../images/plan/icon3.gif";
import './plantrip.css';


function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planifiez votre voyage dès maintenant</h3>
              <h2>Location de voiture simple & rapide</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Sélectionner une voiture</h3>
                <p>
                Nous proposons une large gamme de véhicules pour tous vos besoins de conduite.
Nous avons la voiture parfaite pour répondre à vos besoins.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contacter l'opérateur</h3>
                <p>
                Nos opérateurs compétents et amicaux sont toujours prêts à vous aider avec toutes vos questions ou préoccupations.
                </p>
              </div>

              <div className="plan-container__boxes__box box-3">
                <img src={Drive} alt="icon_img" />
                <h3>En voiture</h3>
                <p>
                Que vous preniez la route ouverte, nous avons tout prévu avec notre large gamme de voitures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
