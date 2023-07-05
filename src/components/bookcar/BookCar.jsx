import { useEffect, useState } from "react";
import './bookcar.css';
import {
  CarAudiA1,
  CarAudiA5,
  CarAudiETron,
  CarAudiQ5,
  CarBmw850i,
  CarBmwM4,
  CarBmwM5,
  CarFiat500,
  CarFordMustang,
  CarLandRover,
  CarMercedesC,
  CarMercedesS,
  CarPeugeot208,
  CarPeugeot308,
  CarPeugeot508,
  CarPorsche,
  CarGolf,
} from "../../images/cars-big";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Audi A1":
      imgUrl = CarAudiA1;
      break;
    case "Audi A5":
      imgUrl = CarAudiA5;
      break;
    case "Audi E Tron":
      imgUrl = CarAudiETron;
      break;
    case "Audi Q5":
      imgUrl = CarAudiQ5;
      break;
    case "BMW 850i":
      imgUrl = CarBmw850i;
      break;
    case "BMW M4":
      imgUrl = CarBmwM4;
      break;
    case "BMW M5":
      imgUrl = CarBmwM5;
      break;
    case "  Fiat 500":
      imgUrl = CarFiat500;
      break;
    case "Ford Mustang":
      imgUrl = CarFordMustang;
      break;
    case "Land Rover":
      imgUrl = CarLandRover;
      break;
    case "Mercedes C Class":
      imgUrl = CarMercedesC;
      break;
    case "Mercedes S Class":
      imgUrl = CarMercedesS;
      break;
    case "Peugeot 208":
      imgUrl = CarPeugeot208;
      break;
    case "Peugeot 308":
      imgUrl = CarPeugeot308;
      break;
    case "Peugeot 508":
      imgUrl = CarPeugeot508;
      break;
    case "Porsche":
      imgUrl = CarPorsche;
      break;
    case "Golf":
      imgUrl = CarGolf;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Réserver une voiture</h2>

              <p className="error-message">
              Tous les champs sont obligatoires! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
              Vérifiez votre e-mail pour confirmer une commande.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Type de voiture <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Type de voiture</option>
                    <option value="Audi A1">Audi A1</option>
                    <option value="Audi A5">Audi A5</option>
                    <option value="Audi E Tron">Audi E Tron</option>
                    <option value="Audi Q5">Audi Q5</option>
                    <option value="BMW 850i">BMW 850i</option>
                    <option value="BMW M4">BMW M4</option>
                    <option value="BMW M5">BMW M5</option>
                    <option value="Fiat 500">Fiat 500</option>
                    <option value="Ford Mustang">Ford Mustang</option>
                    <option value="Land Rover">Land Rover</option>
                    <option value="Mercedes C Class">Mercedes C Class</option>
                    <option value="Mercedes S Class">Mercedes S Class</option>
                    <option value="Peugeot 208">Peugeot 208</option>
                    <option value="Peugeot 308">Peugeot 308</option>
                    <option value="Peugeot 508">Peugeot 508</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Golf">Golf</option>

                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Lieu de départ{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Sélectionnez le lieu de prise</option>
                    <option>Paris</option>
                    <option>Marseille</option>
                    <option>Lyon</option>
                    <option>Toulouse</option>
                    <option>Nice</option>
                    <option>Nantes</option>
                    <option>Strasbourg</option>
                    <option>Montpellier</option>
                    <option>Bordeaux</option>
                    <option>Lille</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Lieu de retour{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Sélectionnez le lieu de dépôt</option>
                    <option>Paris</option>
                    <option>Marseille</option>
                    <option>Lyon</option>
                    <option>Toulouse</option>
                    <option>Nice</option>
                    <option>Nantes</option>
                    <option>Strasbourg</option>
                    <option>Montpellier</option>
                    <option>Bordeaux</option>
                    <option>Lille</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Date de départ <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Date de retour <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                Vérifier la disponibilité
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Terminer la réservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Après avoir rempli cette demande de réservation, vous recevrez :
          </h4>
          <p>
          Votre bon de location à présenter à votre arrivée au comptoir de location et un numéro d'assistance client sans frais.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Lieu et Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Date et heure de retrait</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Date et heure de dépôt</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Lieu de retrait</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Lieu de dépôt</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Informations personnelles</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                Prénom <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">Ce champ est obligatoire.</p>
              </span>

              <span>
                <label>
                Nom <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">Ce champ est obligatoire.</p>
              </span>

              <span>
                <label>
                Téléphone <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">Ce champ est obligatoire.</p>
              </span>

              <span>
                <label>
                Âge <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">Ce champ est obligatoire.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  E-mail <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">Ce champ est obligatoire.</p>
              </span>

              <span>
                <label>
                Adresse <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">Ce champ est obligatoire.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                Ville <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">Ce champ est obligatoire.</p>
              </span>

              <span>
                <label>
                Code postal <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">Ce champ est obligatoire.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Veuillez m'envoyer les dernières nouvelles et mises à jour</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Réservez</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
