import { forwardRef } from "react";

const ChildComponent = forwardRef(function MyInput(props, ref){
  const { label, ...otherProps } = props;
  return (
    <div className="border-light padding-small margin-small">
      <label>
        {label}
        <input {...otherProps} ref={ref} />
      </label>
    </div>
  );
});

export default ChildComponent;