import PropTypes from "prop-types";

export default function CounterStep({ step, handleStepChange }) {
  const handleChange = (e) => {
    handleStepChange(e.target.valueAsNumber);
  };

  return (
    <>
      <p>
        <label htmlFor="inputStep">Step: </label>
        <input
          id="inputStep"
          type="number"
          value={step}
          onChange={handleChange}
        ></input>
      </p>
    </>
  );
}

CounterStep.propTypes = {
  step: PropTypes.number.isRequired,
  handleStepChange: PropTypes.func.isRequired
};
