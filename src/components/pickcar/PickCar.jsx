import { useState } from "react";
import CarBox from "../carbox/CarBox";
import { CAR_DATA } from "../CarData";
import './pickcar.css';
function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Modèles de véhicules</h3>
              <h2>Notre flotte de location</h2>
              <p>
              Choisissez parmi une variété de nos véhicules incroyables à louer pour votre prochaine aventure ou voyage d'affaires.
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  Audi A5
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Audi E Tron
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                 Audi Q5
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  BMW 850i
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  BMW M4
                </button>
                <button
                  className={`${coloringButton("btn7")}`}
                  id="btn7"
                  onClick={() => {
                    setActive("SeventhCar");
                    btnID("btn7");
                  }}
                >
                  BMW M5
                </button>
                <button
                  className={`${coloringButton("btn8")}`}
                  id="btn8"
                  onClick={() => {
                    setActive("EighthCar");
                    btnID("btn8");
                  }}
                >
                  Fiat 500
                </button>
                <button
                  className={`${coloringButton("btn9")}`}
                  id="btn9"
                  onClick={() => {
                    setActive("NinthCar");
                    btnID("btn9");
                  }}
                >
                  Ford Mustang
                </button>
                <button
                  className={`${coloringButton("btn10")}`}
                  id="btn10"
                  onClick={() => {
                    setActive("TenthCar");
                    btnID("btn10");
                  }}
                >
                  Land Rover
                </button>
                <button
                  className={`${coloringButton("btn11")}`}
                  id="btn11"
                  onClick={() => {
                    setActive("EleventhCar");
                    btnID("btn11");
                  }}
                >
                  Mercedes C Class
                </button>
                <button
                  className={`${coloringButton("btn12")}`}
                  id="btn12"
                  onClick={() => {
                    setActive("TwelfthCar");
                    btnID("btn12");
                  }}
                >
                  Mercedes S Class
                </button>
                <button
                  className={`${coloringButton("btn13")}`}
                  id="btn13"
                  onClick={() => {
                    setActive("Thirteenth");
                    btnID("btn13");
                  }}
                >
                  Peugeot 208
                </button>
                <button
                  className={`${coloringButton("btn14")}`}
                  id="btn14"
                  onClick={() => {
                    setActive("Fourteenth");
                    btnID("btn14");
                  }}
                >
                  Peugeot 308
                </button>
                <button
                  className={`${coloringButton("btn15")}`}
                  id="btn15"
                  onClick={() => {
                    setActive("FifteenthCar");
                    btnID("btn15");
                  }}
                >
                  Peugeot 508
                </button>
                <button
                  className={`${coloringButton("btn16")}`}
                  id="btn16"
                  onClick={() => {
                    setActive("SixteenthCar");
                    btnID("btn16");
                  }}
                >
                  Porsche
                </button>
                <button
                  className={`${coloringButton("btn17")}`}
                  id="btn17"
                  onClick={() => {
                    setActive("SeventeenthCar");
                    btnID("btn17");
                  }}
                >
                  Golf
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
              {active === "SeventhCar" && <CarBox data={CAR_DATA} carID={6} />}
              {active === "EighthCar" && <CarBox data={CAR_DATA} carID={7} />}
              {active === "NinthCar" && <CarBox data={CAR_DATA} carID={8} />}
              {active === "TenthCar" && <CarBox data={CAR_DATA} carID={9} />}
              {active === "EleventhCar" && <CarBox data={CAR_DATA} carID={10} />}
              {active === "TwelfthCar" && <CarBox data={CAR_DATA} carID={11} />}
              {active === "Thirteenth" && <CarBox data={CAR_DATA} carID={12} />}
              {active === "Fourteenth" && <CarBox data={CAR_DATA} carID={13} />}
              {active === "FifteenthCar" && <CarBox data={CAR_DATA} carID={14} />}
              {active === "SixteenthCar" && <CarBox data={CAR_DATA} carID={15} />}
              {active === "SeventeenthCar" && <CarBox data={CAR_DATA} carID={16} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
