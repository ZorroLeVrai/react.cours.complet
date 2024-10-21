import PropTypes from "prop-types";

export default function ChangeCounter(props) {
  const { handleIncrement, handleDecrement, handleInit } = props;

  return (
    <div>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleInit}
        >
          Init
        </button>
      </span>
    </div>
  );
}

ChangeCounter.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleInit: PropTypes.func.isRequired
};
