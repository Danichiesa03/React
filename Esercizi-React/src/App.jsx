import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={0} incrementAmount={1}></Counter>
    </>
  );
}

export default App;
