import { useState } from "react";
import { Counter } from "./components/Counter";

import "./App.css";
import { Message } from "./components/Message";

function App() {
  const [count, setCount] = useState(0);

  function handleInc() {
    if (count >= 10) return;
    setCount((prev) => prev + 1);
  }

  function handleDec() {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <Message count={count} />
      <Counter count={count} handleInc={handleInc} handleDec={handleDec} />
     
    </>
  );
}

export default App;
