import {
  HeroPages,
  Footer,
} from "../../components/index.js";

import {
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
} from "../../images/team";
import './team.css';

function Team() {
  const teamPpl = [
    { img: Person1, name: "Person 1", job: "Vendeur" },
    { img: Person2, name: "Person 1", job: "Propriétaire d'entreprise" },
    { img: Person3, name: "Person 3", job: "Photographe" },
    { img: Person4, name: "Person 4", job: "Détailleur automobile" },
    { img: Person5, name: "Person 5", job: "Mécanicien" },
    { img: Person6, name: "Person 6", job: "Ménager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Notre équipe" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
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

export default Team;
