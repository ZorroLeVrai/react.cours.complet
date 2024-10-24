import { useEffect, useLayoutEffect, useState } from 'react';

const DemoUseLayoutEffect = () => {
  const [size, setSize] = useState(0);

  // useLayoutEffect: Runs synchronously before the paint
  useLayoutEffect(() => {
    const element = document.getElementById('box');
    if (element) {
      setSize(element.offsetWidth); // Measures before the paint
    }
  }, []);

  // useEffect: Runs after the paint
  useEffect(() => {
    console.log('Component rendered');
  }, []);

  return (
    <div>
      <div id="box" style={{ width: 100, height: 100, backgroundColor: 'red' }}>
        Box
      </div>
      <p>The box width is: {size}px</p>
    </div>
  );
};

export default DemoUseLayoutEffect;
