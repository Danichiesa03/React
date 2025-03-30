import { useState } from "react";
import "./App.css";
import useCounter from "./components/useCounter";
import FilteredList from "./components/FilteredList";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const lista = [
    { id: 1, name: "Giacomo", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Mario", age: 30 },
    { id: 4, name: "Alessia", age: 15 },
    { id: 5, name: "Daniele", age: 49 },
  ];
  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>
      <h2>Lista filtrata</h2>
      <FilteredList list={lista} />
    </div>
  );
}

export default App;
