//we are given Lottery tickest with 3 digit number
//The number is generated randomly
//if the sum of all digits is 15 , we win the lottery & get the prize

import { useState } from "react";
import { genTicket, isWinning } from "./helper";

import Ticket from "./Ticket";



export default function Lottery({n,winningSum}){
    const [ticket, setTicket] = useState(genTicket(n));

    let buyNewTicket = function () {
             setTicket(genTicket(3));
    }

    
    
    return(
        <div className="card">

              <h2 className="ludo-title">Lottery Game!</h2>
              <div>
                <Ticket ticket={ticket} />
                <p >{isWinning(ticket, winningSum)}</p>
                <button onClick={buyNewTicket}>Buy New Ticket</button>
                <p>You need a sum of ticket numbers equal to 15 to win.</p>
              </div>
        </div>
    );
}