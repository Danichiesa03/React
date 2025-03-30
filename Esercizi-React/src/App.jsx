import { useState } from "react";
import "./App.css";
import useCounter from "./components/Counter";

function App({ initialValue = 0 }) {
  const { count, increment, decrement, reset } = useCounter(initialValue);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </>
  );
}

export default App;
