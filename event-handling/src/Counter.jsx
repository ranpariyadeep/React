import  { useState } from "react";

// function outside the component


function Counter() {
  let [count, setCount] = useState(0);

  function increaseCount() {
  setCount(count + 1);
}

  return (
    <button onClick={() => increaseCount()}>
      {count}
    </button>
  );
}

export default Counter;

