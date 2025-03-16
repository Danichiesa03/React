import React, { useState, useEffect } from "react";
export default function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("Counter value:", counter);
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + increment)}>Increment</button>
    </div>
  );
}
