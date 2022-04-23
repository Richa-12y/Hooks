import React from "react";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
function App() {
  return (
    <div className="App">
      <h1>This is all about React Class Components</h1>
      <ClassCounter />
      <ClassCounterOne />
      <h1>This is all about React function Components</h1>
      <HookCounter />
      <HookCounterOne />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
