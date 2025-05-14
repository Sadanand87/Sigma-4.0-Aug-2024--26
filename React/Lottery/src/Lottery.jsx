import { useState } from 'react';
import { genTicket, sum } from "./helper";

export default function Lottery() {
  const [ticket, setTicket] = useState([0, 0, 0,0]); // Initial blank ticket
  const [isWinning, setIsWinning] = useState(false);

  const handleClick = () => {
    const newTicket = genTicket(4);
    setTicket(newTicket);
    setIsWinning(sum(newTicket) === 15);
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <span>{ticket[3]}</span>
      </div>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
      <button onClick={handleClick}>Buy New Ticket</button>
    </div>
  );
}
