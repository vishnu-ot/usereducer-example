import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };
    case "DEC":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <>
      <h2>{state.counter}</h2>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>-</button>
    </>
  );
}

export default App;
