import React, { useState } from "react";

function ToggleChallange() {
  const [sahowAlert, setShowAlert] = useState(false);
  //   const toggelAlert = () => {
  //     if (sahowAlert) {
  //       SetShowAlert(false);
  //       return;
  //     }
  //     SetShowAlert(true);
  //   };
  return (
    <div>
      <h1>toggle Challange</h1>
      {/* <button className="btn" onClick={toggelAlert}> */}
      <button className="btn" onClick={() => setShowAlert(!sahowAlert)}>
        Toggle
      </button>
      {sahowAlert && <Alert />}
    </div>
  );
}

const Alert = () => {
  return (
    <>
      <div className="alert alert-danger">This is alert</div>
    </>
  );
};

export default ToggleChallange;
