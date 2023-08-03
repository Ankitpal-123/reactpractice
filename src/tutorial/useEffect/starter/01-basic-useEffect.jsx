import { useEffect, useState } from "react";

function UseEffectBasic() {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hellow here");
  };
  sayHello();
  useEffect(() => {
    console.log("Hello UseEffect");
  });
  return (
    <div>
      <h1>Basic of useEffect</h1>
      <h1>Value {value} </h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UseEffectBasic;
