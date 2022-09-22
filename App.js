import React, { useState } from "react";
import "./App.css";
import Dice from "./component/dice/Dice";
import Players from "./component/players/Players";

function App() {
  const [score, setScore] = useState(0);
  const [dice, setDice] = useState(1);
  const [count, setCount] = useState(0);
  const [currentscore, setCurrentscore] = useState(0);


  const btnRoll = () => {
    var dicenum = Math.floor(Math.random() * 6) + 1;
    setDice(dicenum);

    console.log(dicenum);
    setCount(count + 1);
    console.log(count);
    const playerselection = count % 2;
    if (playerselection == 1) {
      return setCurrentscore(currentscore + dicenum);
    } else {
      return setScore(score + dicenum);
    }
  }
  const resetBtn = () =>{
    setScore(0);
    setDice(1);
    setCount(0);
    setCurrentscore(0);

  }
  return (
    <div className="wrapper clearfix">
      <Players score={score} playername={1} win />
      <Players score={currentscore} playername={2} />

      <button onClick={resetBtn} className="btn-new">New game</button>
      <button onClick={btnRoll} className="btn-roll">
        Roll dice
      </button>

      <Dice num={dice} />
      <div id="winner1">{currentscore >= 25?(<p>Player 2 won</p>) : score >= 25 ?(<p>Player 1 won</p>):null}</div>
    </div>
  );
}

export default App;
