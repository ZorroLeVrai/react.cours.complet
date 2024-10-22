import { useRef } from "react";
import ChildComponent from "./ChildComponent";

const DemoForwardRef = () => {
  const inputRef = useRef(null);
  
  function handleClick() {
    if (inputRef.current)
      inputRef.current.focus();
  }

  return (
    <>
      <ChildComponent label="Child Component" ref={inputRef} />
      <button onClick={handleClick}>Mettre le focus</button>
    </>
  );
};

export default DemoForwardRef;