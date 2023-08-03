import { useState } from "react";

function ShortCircuitOverview() {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  return (
    <div>
      <h1>hello react</h1>
      <h4>False OR: {text || "hello world"}</h4>
      <h4>False AND:{text && "hello world"}</h4>
      <h4>True OR:{name || "hello world"}</h4>
      <h4>True AND:{name && "hello world"}</h4>
    </div>
  );
}

export default ShortCircuitOverview;
