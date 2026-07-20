import { useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState("");

  async function handleMessage() {
    const res = await axios.get("http://localhost:3000/api/message");
    setResponse(res.data.message);
  }
  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCount}>increase</button>

      <div>{response}</div>
      <button onClick={handleMessage}>message</button>
    </>
  );
}

export default App;
