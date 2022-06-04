import { useState } from "react";

import ControlPanel from "./components/controlPanel/ControlPanel";

import "./App.css";

function App() {
  const [text, setText] = useState<string[]>([
    "h",
    "e",
    "l",
    "l",
    "o",
    " ",
    "w",
    "o",
    "r",
    "l",
    "d",
    "!",
    " ",
  ]);
  const [curve, setCurve] = useState<number>(360);
  const [range, setRange] = useState<number>(200);
  const [isBordersVisible, setIsBordersVisible] = useState<boolean>(false);
  const [isLettersColorful, setIsLettersColorful] = useState<boolean>(true);
  const options = {
    width: 30,
  };

  return (
    <div className="App">
      <div className="controlContainer">
        <ControlPanel
          setText={setText}
          setCurve={setCurve}
          setRange={setRange}
          setIsBordersVisible={setIsBordersVisible}
          setIsLettersColorful={setIsLettersColorful}
          curve={curve}
          range={range}
          isBordersVisible={isBordersVisible}
          text={text}
          isLettersColorful={isLettersColorful}
        />
      </div>
      <div className="letterContainer">
        <div
          className="letterBox"
          style={{
            animation: `5s infinite cubic-bezier(0.3, 0.3, 0.3, 0.3) slidein`,
          }}
        >
          {text.map((letter, i) => (
            <span
              key={Math.random()}
              className="letterValue"
              style={{
                width: `${options.width}px`,
                border: `${isBordersVisible ? "1px solid red" : "none"}`,
                display: "inline-block",
                height: `${range}px`,
                fontSize: `30px`,
                transform: `rotate(calc(${curve} / ${text.length} * ${i}deg))`,
                animation: `${
                  isLettersColorful
                    ? "5s infinite cubic-bezier(0.3, 0.3, 0.3, 0.3) rainbow"
                    : ""
                }`,
                top: `calc(50% - ${range / 2}px)`,
                left: `calc(50% - ${options.width / 2}px)`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
