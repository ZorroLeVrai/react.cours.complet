import { createSelector } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const selectorFunction = state => {
  //console.log("state.first.a1")
  return state.first.a1;
  //return state.first.a1.filter(e => e % 2 == 1);
}

// creates a memoized selector using createSelector
const selectA1Selector = createSelector(
  [selectorFunction],
  val => {
    console.log("First Selection Function (a1)");
    return val.filter(e => e % 2 == 1);
  }
);

const DisplayFirstData = () => {
  //using the selector
  const a1Value = useSelector(selectA1Selector);

  const refreshCounter = useRef(1);
  useEffect(() => { refreshCounter.current += 1; });

  return (
    <div>
      DisplayFirstData ({refreshCounter.current}) - a1: {a1Value.length}
    </div>
  )
}

export default DisplayFirstData;