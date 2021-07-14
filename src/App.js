import { useState } from "react";

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function App() {
  const [colorCode, setColorCode] = useState("#f8fafc");

  function getRandom() {
    return Math.floor(Math.random() * hex.length);
  }

  function changeBg() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandom()];
    }
    setColorCode(hexColor);
  }

  return (
    <div className="App" style={{ backgroundColor: colorCode }}>
      <div className="nav-center">
        <h2 className="text-center text-3xl shadow-2xl p-4 font-mono text-yellow-400">
          Colour Flipper
        </h2>
      </div>

      <div className="bg-transparent flex items-center justify-center min-h-screen text-center">
        <div>
          <h1 className="bg-black text-white p-8 rounded px-16 text-3xl  font-mono">
            Background Color:
            <span
              className="color
    text-purple-600"
            >
              {colorCode}
            </span>
          </h1>
          <button
            className="mt-3 p-4 px-6 rounded bg-transparent border-4 hover:bg-black hover:text-white hover:border-black text-2xl py-3"
            id="btn"
            onClick={changeBg}
          >
            click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
