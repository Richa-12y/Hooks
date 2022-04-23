import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [countdec, setCountdec] = useState(10);
  const HookCounterIncre = () => {
    setCount(count + 1);
  };
  const HookCounterDec = () => {
    setCountdec(countdec - 1);
  };
  return (
    <div>
      <button onClick={HookCounterIncre}>HookCounterInc{count}</button>
      <br />
      <button onClick={HookCounterDec}>HookCounterDec{countdec}</button>
    </div>
  );
}

export default HookCounter;
