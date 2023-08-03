import { useState } from "react";

function CleanUpFunction() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RenderComponent />}
    </div>
  );
}

const RenderComponent = () => {
  return <h1>Hello Toggle</h1>;
};

export default CleanUpFunction;
