import DisplayCounter from "./DisplayCounter";
import ChangeCounter from "./ChangeCounter";
import CounterStep from "./CounterStep";
import { useReducer } from "react";

export const COUNTER_ACTION = Object.freeze({
  INCREMENT: "Increment",
  DECREMENT: "Decrement",
  INIT: "Init",
});

export const STEP_ACTION = Object.freeze({
  SET_VALUE: "Set Value",
});

function reducer(state, action) {
  const { counter, step } = state;

  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return { ...state, counter: counter + step };
    case COUNTER_ACTION.DECREMENT:
      return { ...state, counter: counter - step };
    case COUNTER_ACTION.INIT:
      return { ...state, counter: 0 };
    case STEP_ACTION.SET_VALUE:
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

export default function CounterDevice({ count = 0 }) {
  const [counterState, dispatch] = useReducer(reducer, {
    counter: count,
    step: 1,
  });

  return (
    <>
      <DisplayCounter counter={counterState.counter} />
      <CounterStep step={counterState.step} dispatch={dispatch} />
      <ChangeCounter dispatch={dispatch} />
    </>
  );
}
