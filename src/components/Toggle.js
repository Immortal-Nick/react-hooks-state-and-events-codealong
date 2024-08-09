import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn? "red" : "green";

  return (
    <button style={{background : color}} onClick={handleClick}> {isOn ? "FALA" : "MANGAA"}</button>
  );
}

export default Toggle;
