import { useState } from "react";

function UserefBasic() {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const decreaseElememt = () => {
    if (value === 0) return;

    setValue(value - 1);
  };

  return (
    <div>
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div className="" style={{ gap: "5" }}>
        <h1>Value : {value}</h1>
        <button
          type="submit"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
        <button type="submit" className="btn" onClick={decreaseElememt}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default UserefBasic;
