import { useState, createContext } from "react";
import Parent from "./pages/Parent";
import './App.css';

/** context api (global state):
  1. export const COUNTER_CONTEXT = createContext();
  2. <contextName.Provider value ={object of states}>{where/which element to send}</contextName.Provider>
  3. import COUNTER_CONTEXT
  4. const {count, setCount } = useContext(COUNTER_CONTEXT)
 **/
export const COUNTER_CONTEXT = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App-header">
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
