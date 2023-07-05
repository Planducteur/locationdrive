import { useState } from "react";
import './faq.css';
function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Foire aux questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>
                    1. Qu'y a-t-il de spécial à comparer les offres de location
                    de voitures?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Il est important de comparer les offres de location de
                  voitures, car cela vous aide à trouver la meilleure offre qui
                  correspond à votre budget et à vos besoins, vous garantissant
                  ainsi le meilleur rapport qualité-prix. En comparant
                  différentes options, vous pouvez trouver des offres qui
                  offrent des prix plus bas, des services supplémentaires ou de
                  meilleurs modèles de voiture. Vous pouvez trouver des offres
                  de location de voitures en effectuant des recherches en ligne
                  et en comparant les prix de différentes sociétés de location.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>
                    2. Comment puis-je trouver les offres de location de
                    voitures?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Vous pouvez trouver des offres de location de voitures en
                  effectuant des recherches en ligne et en comparant les prix de
                  différentes sociétés de location. Des sites Web tels
                  qu'Expedia, Kayak et Travelocity vous permettent de comparer
                  les prix et de consulter les options de location disponibles.
                  Il est également recommandé de s'inscrire aux newsletters par
                  e-mail et de suivre les sociétés de location de voitures sur
                  les réseaux sociaux pour être informé des offres spéciales ou
                  des promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>
                    3. Comment puis-je trouver des prix de location de voiture
                    aussi bas?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Réservez à l'avance : réserver votre voiture de location à
                  l'avance peut souvent entraîner une baisse des prix. Comparez
                  les prix de plusieurs sociétés : utilisez des sites Web comme
                  Kayak, Expedia ou Travelocity pour comparer les prix de
                  plusieurs sociétés de location de voitures. Recherchez des
                  codes de réduction et des coupons : recherchez des codes de
                  réduction et des coupons que vous pouvez utiliser pour réduire
                  le prix de la location. La location à partir d'un emplacement
                  hors aéroport peut parfois entraîner des prix plus bas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
