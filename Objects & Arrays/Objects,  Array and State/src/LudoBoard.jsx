import { useState } from "react";

export default function LudoBoard(){
    let [moves , setMoves] = useState({blue:0, red:0, yellow:0, green:0});

    let updateBlue = (color) => {
        console.log(`moves.${color} = ${moves[color]}`);
        setMoves((prevMoves) => {
             return   {...prevMoves, [color]: prevMoves[color] + 1}
        });
    }


    return(
        <div className="card">
      <h2 className="ludo-title">Ludo Board</h2>

      <div className="board">
        <p style={{color:"black" , textAlign: "center"}} >Blue Moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => updateBlue("blue")}
        >
          +1
        </button>

        <p style={{color:"black" , textAlign: "center"}}>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "gold", color: "black" }}
          onClick={() => updateBlue("yellow")}
        >
          +1
        </button>

        <p style={{color:"black" , textAlign: "center"}}>Green Moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => updateBlue("green")}
        >
          +1
        </button>

        <p style={{color:"black" , textAlign: "center"}} >Red Moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => updateBlue("red")}
        >
          +1
        </button>
      </div>
    </div>
    );
}