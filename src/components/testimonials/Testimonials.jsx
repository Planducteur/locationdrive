import Img2 from "../../images/testimonials/pfp1.png";
import Img3 from "../../images/testimonials/pfp2.png";
import './testimonials.css';
function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Avis des utilisateurs</h4>
              <h2>Témoignages des clients</h2>
              <p>
              Découvrez l'impact positif que nous avons eu sur nos clients en lisant leurs témoignages. Nos clients ont vécu notre service et obtenu des résultats, et ils sont impatients de partager leurs expériences positives avec vous.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Découvrez l'impact positif que nous avons eu sur nos clients en lisant leurs témoignages. Nos clients ont vécu notre service et obtenu des résultats, et ils sont impatients de partager leurs expériences positives avec vous. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Tulsa King</h4>
                      <p>Oklahoma</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "La voiture était en excellent état et a rendu notre voyage encore meilleur. Je recommande vivement ce site de location de voitures !"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Dwight Manfredi</h4>
                      <p>Tulsa</p>
                    </span>
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

export default Testimonials;
