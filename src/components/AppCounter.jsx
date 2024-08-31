import { useState } from "react";

export default function AppCounter() {
  const [counter, setCounter] = useState(0);

  const incementHandler = () => setCounter((val) => val + 1);

  const decrementHandler = () => setCounter((val) => val - 1);

  const resetHandler = () => setCounter(0);
  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={resetHandler}>reset</button>
        <button onClick={incementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
    </>
  );
}
