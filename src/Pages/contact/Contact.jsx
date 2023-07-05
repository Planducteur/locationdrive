import {
  HeroPages,
  Footer,
} from "../../components/index.js";

import './contact.css';
function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Besoin d'informations supplémentaires ?</h2>
              <p>
              Un professionnel polyvalent compétent dans plusieurs domaines de recherche, de développement ainsi qu'un spécialiste de l'apprentissage. Plus de 15 ans d'expérience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; 12-34-56-78-69
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                locationdrive@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Paris,
                France
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                Nom <b>*</b>
                </label>
                <input type="text" ></input>

                <label>
                E-mail <b>*</b>
                </label>
                <input type="email" ></input>

                <label>
                Parlez-nous-en <b>*</b>
                </label>
                <textarea ></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; 
                  Envoyer Message
                </button>
              </form>
            </div>
          </div>
        </div>
    
        <Footer />
      </section>
    </>
  );
}

export default Contact;
