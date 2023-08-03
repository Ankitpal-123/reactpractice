import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(1);

  const handleChange = () => {
    setCount((count) => count + 1);
  };
  const handle = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Basic of useState</h1>
      <h3>You Click the btn {count} times</h3>
      <button type="button" className="btn" onClick={handleChange}>
        +1
      </button>
      <button type="button" className="btn" onClick={handle}>
        -1
      </button>
    </>
  );
};

export default UseStateBasics;
