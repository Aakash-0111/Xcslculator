import { useState } from "react";
import  "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setValue(value + e.target.name);
  };

  const clear = (e) => {
    e.preventDefault();
    setValue("");
    setResult("");
  };

  const calculate = (e) => {
    e.preventDefault();
    if (value) {
      setResult(eval(value));
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>My Calculator</h1>
        <form action="">
          <div className="textInput">
            <input type="text" value={value} />
            <p>{result}</p>
          </div>
          <div>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          <div>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="*" onClick={handleClick}>
              *
            </button>
          </div>
          <div>
            <button onClick={clear}>C</button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button onClick={calculate}>=</button>
            <button name="/" onClick={handleClick}>
              /
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;