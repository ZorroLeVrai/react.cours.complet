import { createSelector } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const selectorFunction = state => {
  //console.log("state.second.b1");
  return state.second.b1;
  //return state.second.b1.filter(e => e % 2 == 1);
}

const selectB1Selector = createSelector(
  [selectorFunction],
  val => {
    console.log("Second Selection Function (b1)");
    return val.filter(e => e % 2 == 1);
  }
);

const DisplaySecondData = () => {
  const b1Value = useSelector(selectB1Selector);

  const refreshCounter = useRef(1);
  useEffect(() => { refreshCounter.current += 1; });

  return (
    <div>
      DisplaySecondData ({refreshCounter.current}) - b1: {b1Value.length}
    </div>
  )
}

export default DisplaySecondData;