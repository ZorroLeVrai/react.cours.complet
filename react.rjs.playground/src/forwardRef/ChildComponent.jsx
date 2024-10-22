import { forwardRef } from "react";

const ChildComponent = forwardRef(function MyInput(props, ref){
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

export default ChildComponent;