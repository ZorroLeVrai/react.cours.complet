import { useState } from "react";
import DisplayCounter from "./DisplayCounter";
import ChangeCounter from "./ChangeCounter";
import CounterStep from "./CounterStep";
import "./Styles.css";

export default function DemoCompteur() {
  const [counterState, setCounterState] = useState({ counter: 0, step: 1 });

  const incrementCounter = () =>
    setCounterState((currentState) => ({
      ...currentState,
      counter: counterState.counter + counterState.step,
    }));

  const decrementCounter = () =>
    setCounterState((currentState) => ({
      ...currentState,
      counter: counterState.counter - counterState.step,
    }));

  const initCounter = () =>
    setCounterState((currentState) => ({ ...currentState, counter: 0 }));

  const changeStep = (val) =>
    setCounterState((currentState) => ({ ...currentState, step: val }));

  return (
    <>
      <DisplayCounter counter={counterState.counter} />
      <CounterStep step={counterState.step} handleStepChange={changeStep} />
      <ChangeCounter
        handleIncrement={incrementCounter}
        handleDecrement={decrementCounter}
        handleInit={initCounter}
      />
    </>
  );
}
