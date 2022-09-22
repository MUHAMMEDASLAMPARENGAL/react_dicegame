import react from "react";
import "./Dice.css";
import Diceimages from "./images/dice1.png";
import Diceimages2 from "./images/dice2.png";
import Diceimages3 from "./images/dice3.png";
import Diceimages4 from "./images/dice4.png";
import Diceimages5 from "./images/dice5.png";
import Diceimages6 from "./images/dice6.png";

const dice = {
  1: Diceimages,
  2: Diceimages2,
  3: Diceimages3,
  4: Diceimages4,
  5: Diceimages5,
  6: Diceimages6,
};

function Dice({ num }) {
  return (
    <div className="dice-elements">
      <div className="dice-images">
        <img src={dice[num]} alt="Dice" className="dice" />
      </div>
    </div>
  );
}

export default Dice;
