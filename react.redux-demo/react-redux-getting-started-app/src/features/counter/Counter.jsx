import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const refIncrementByAmount = React.useRef(null);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div>
      <button aria-label="Increment value" onClick={handleIncrement}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={handleDecrement}>
        Decrement
      </button>
      <div>
        <label htmlFor="incrementByAmount" >Increment by amount:</label>
        <input
          id="incrementByAmount"
          type="number"
          ref={refIncrementByAmount}
          />
        <button onClick={() => dispatch(incrementByAmount(refIncrementByAmount.current.valueAsNumber))}>
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
