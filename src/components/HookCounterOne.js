import React, { useState } from "react";

function HookCounterOne() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      Count:{count}
      <button onClick={intialCount}>Reset</button>
      <button onClick={incrementFive}>Increment</button>
      <button onClick={decFive}>Decerement</button>
      {/* we can also define funcation this way */}
      <br />
      Count:{count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decerement</button>
    </div>
  );
}

export default HookCounterOne;
