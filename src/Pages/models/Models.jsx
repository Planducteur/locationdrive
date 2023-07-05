import {
  HeroPages,
  Footer,
} from "../../components/index.js";

import { CAR_DATA } from "../../components/CarData.js";

import { Link } from "react-router-dom";
import './models.css';
function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
           
          {CAR_DATA.map((car, index) => (
        <div className="models-div__box" key={index}>
          <div className="models-div__box__img">
            <div className="models-div__box__img__overlay">
              <img src={car[0].img} alt="car_img" />
            </div>
            
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>{car[0].name}</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__price">
                  <h4>{car[0].price} €</h4>
                  <p>par jour</p>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path id="pickup-car" d="M14.794,5.166l-1.122-3.74A1.988,1.988,0,0,0,11.756,0H4.244A1.988,1.988,0,0,0,2.328,1.426L1.206,5.166A2,2,0,0,0,0,7v4a1,1,0,0,0,1,1H1v1a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V12h8v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V12h0a1,1,0,0,0,1-1V7a2,2,0,0,0-1.206-1.834ZM4.244,2h7.512l.9,3H3.344l.9-3ZM4,9.5a1,1,0,1,1,1-1A1,1,0,0,1,4,9.5Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,12,9.5Z" fill="#010103"></path></svg> &nbsp; {car[0].mark}
                </span>
                <span style={{ textAlign: "right" }}>
                  {car[0].doors} &nbsp; <svg xmlns="http://www.w3.org/2000/svg" id="_1074681" data-name="1074681" width="15" height="19.692" viewBox="0 0 15 19.692"><path id="Path_9025" data-name="Path 9025" d="M96.923,0H91.154A1.154,1.154,0,0,0,90,1.154V2.346A1.154,1.154,0,0,0,91.154,3.5h5.769a1.154,1.154,0,0,0,1.154-1.154V1.154A1.154,1.154,0,0,0,96.923,0Zm0,0" transform="translate(-86.538)" fill="#010103"></path><path id="Path_9026" data-name="Path 9026" d="M0,424.308v1.154H15v-1.154A2.308,2.308,0,0,0,12.692,422H2.308A2.308,2.308,0,0,0,0,424.308Zm0,0" transform="translate(0 -405.769)" fill="#010103"></path><path id="Path_9027" data-name="Path 9027" d="M150,332h3.462v2.308H150Zm0,0" transform="translate(-144.231 -319.231)" fill="#010103"></path><path id="Path_9028" data-name="Path 9028" d="M150,121h3.462v6.962H150Zm0,0" transform="translate(-144.231 -116.346)" fill="#010103"></path><path id="Path_9029" data-name="Path 9029" d="M33.678,125.108l.9,6.315h2.4V121h-.816l-1.661,1.661a2.9,2.9,0,0,0-.816,2.447Zm0,0" transform="translate(-32.355 -116.346)" fill="#010103"></path><path id="Path_9030" data-name="Path 9030" d="M270,121v10.423h2.4l.9-6.315a2.9,2.9,0,0,0-.816-2.447L270.816,121Zm0,0" transform="translate(-259.615 -116.346)" fill="#010103"></path></svg>
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.198" height="18.43" viewBox="0 0 16.198 18.43"><g id="_3068411" data-name="3068411" transform="translate(-31.001)"><path id="Path_9037" data-name="Path 9037" d="M332.62,362a1.62,1.62,0,1,0,1.62,1.62A1.622,1.622,0,0,0,332.62,362Zm0,2.16a.54.54,0,1,1,.54-.54A.541.541,0,0,1,332.62,364.16Z" transform="translate(-289.2 -348.969)" fill="#010103"></path><path id="Path_9038" data-name="Path 9038" d="M46.659,0a.54.54,0,0,0-.54.54V12.008a3.773,3.773,0,0,0-5.4,0V7.127a3.785,3.785,0,0,0-2.16-3.411V1.08h1.98a.54.54,0,0,0,0-1.08h-7.2a.54.54,0,0,0,0,1.08h1.98V3.716a3.785,3.785,0,0,0-2.16,3.411v6.983h-.54a.54.54,0,0,0-.512.369l-1.08,3.24a.54.54,0,0,0,.512.711h4.32a.54.54,0,0,0,.512-.711l-1.08-3.24a.54.54,0,0,0-.512-.369h-.54V9.77a3.773,3.773,0,0,0,5.4,0v4.881a3.78,3.78,0,0,0,7.559,0V.54A.54.54,0,0,0,46.659,0ZM34.391,15.191l.72,2.16H32.29l.72-2.16ZM36.4,1.08h1.08V7.127a.54.54,0,1,1-1.08,0Zm.54,8.747a2.7,2.7,0,0,1-1.62-4.856V7.127a1.62,1.62,0,0,0,3.24,0V4.971a2.7,2.7,0,0,1-1.62,4.856Zm6.479,7.523a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,43.419,17.35Z" fill="#010103"></path></g></svg> &nbsp; {car[0].transmission}
                </span>
                <span style={{ textAlign: "right" }}>
                  {car[0].fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
                </span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
