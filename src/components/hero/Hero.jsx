import * as React from "react";
import { Link } from 'react-router-dom';
import HeroCar from "../../images/hero/main-car.png";
import { useEffect, useState } from "react";
import './hero.css';
function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">

          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Planifiez votre voyage dès maintenant</h4>
              <h1>
              Économisez <span>énormément</span> avec notre location de voiture
              </h1>
              <p>
              Louez la voiture de vos rêves. Des prix imbattables, des kilomètres illimités,
des options de prise en charge flexibles et bien plus encore.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Réserver une voiture &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
