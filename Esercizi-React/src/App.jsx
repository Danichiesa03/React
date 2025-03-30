import { useState } from "react";
import "./App.css";
import useCounter from "./components/Counter";
import useInput from "./components/Input";

function App({ initialValue = 0 }) {
  const { count, increment, decrement, reset } = useCounter(initialValue);
  const { formData, handleChange } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
