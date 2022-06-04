interface IControlPanel {
  curve: number;
  range: number;
  text: string[];
  isBordersVisible: boolean;
  isLettersColorful: boolean;
  setText: (text: string[]) => void;
  setCurve: (curve: number) => void;
  setRange: (range: number) => void;
  setIsBordersVisible: (isBordersVisible: boolean) => void;
  setIsLettersColorful: (isLettersColorful: boolean) => void;
}

export default function ControlPanel(props: IControlPanel) {
  function textQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    props.setText(event.target.value.split(""));
    console.log(props.text);
  }

  function valueHandler(
    setValue: (value: number) => void,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setValue(+event.target.value);
  }

  return (
    <form className="controlForm">
      <label className="controlLabel" htmlFor="text">
        Text to curve
      </label>
      <input
        className="controlInput"
        type="text"
        id="text"
        onChange={textQueryHandler}
        defaultValue="hello world!"
      />
      <label className="controlLabel" htmlFor="curve">
        Curving degree
      </label>
      <input
        className="controlInput"
        type="range"
        id="curve"
        onChange={(value) => valueHandler(props.setCurve, value)}
        min="0"
        max="360"
        step="1"
        value={props.curve}
      ></input>
      <label className="controlLabel" htmlFor="height">
        Range
      </label>
      <input
        className="controlInput"
        type="range"
        id="height"
        onChange={(value) => valueHandler(props.setRange, value)}
        min="10"
        max="500"
        step="1"
        value={props.range}
      ></input>
      <label className="controlLabel" htmlFor="borders">
        Hide borders
      </label>
      <input
        className="controlInput"
        type="checkbox"
        checked={props.isBordersVisible}
        onChange={() => props.setIsBordersVisible(!props.isBordersVisible)}
        id="borders"
      />
      <label className="controlLabel" htmlFor="colorfulLetters">
        Enable Colorful Letters
      </label>
      <input
        className="controlInput"
        type="checkbox"
        checked={props.isLettersColorful}
        onChange={() => props.setIsLettersColorful(!props.isLettersColorful)}
        id="colorfulLetters"
      />
    </form>
  );
}
