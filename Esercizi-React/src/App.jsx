import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Clock from "./components/Clock";

export default function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} />
      <Clock />
    </div>
  );
}
