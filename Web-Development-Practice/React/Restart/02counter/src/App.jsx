import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h2>Simple Counter</h2>
      <h1>{count}</h1>
      <div className="buttons">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            if (count != 0) {
              setCount(count - 1);
            }
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
