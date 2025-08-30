import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTickets = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTickets}>Buy New Ticket</button>

      {isWinning ? (
        <h4> Congratulations, you won! 🎉</h4>
      ) : (
        <h4> Try again next time</h4>
      )}
    </div>
  );
}
