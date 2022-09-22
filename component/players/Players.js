import React from "react";
import "./Players.css";

function Players({ score, playername}) {
  return (
    <div className="player-0 ,acive">
      <div className="player-name">
        player{playername}
        
      </div>
      <div className="player-score">{score}</div>
    </div>
  );
}

export default Players;
