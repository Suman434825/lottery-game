import "./App.css";
import { sum } from "./helper";
import Lotterys from "./Lotterys";


export default function App() {
    
  let winCondition = (ticket) => sum(ticket) === 30;

  return (
    <div>
      <h1>Welcome to Lottery App</h1>
      <Lotterys n={6} winCondition={winCondition} />
    </div>
  );
}
