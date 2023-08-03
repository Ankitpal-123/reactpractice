import { useState } from "react";

function UseStateGotcha() {
  const [value, setValue] = useState(0);
  const handeleChange = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };
  const handeleChangeDecrease = () => {
    if (value === 0) {
      return;
    }
    setValue((value) => value - 1);
  };
  return (
    <>
      <h1>UseStateGotcha :- {value}</h1>
      <button className="btn" type="button" onClick={handeleChange}>
        Increase
      </button>
      <button className="btn" type="button" onClick={handeleChangeDecrease}>
        Decrease
      </button>
    </>
  );
}

export default UseStateGotcha;
