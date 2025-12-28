import { useState } from "react";
function App(){
  // bhai yeh number change hoga
  const[count,setCount]=useState(0);
  //👉 button click → function → state update → UI update
  function increment(){
    setCount(count+1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }
  return (<div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Counter App</h1>
    <h2>{count}</h2>

    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
  </div>);
}
export default App;