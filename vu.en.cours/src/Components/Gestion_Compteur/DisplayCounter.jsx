import PropTypes from "prop-types";

export default function DisplayCounter({ counter }) {
  return <div className="badge bg-primary fs-5">{counter}</div>;
}

DisplayCounter.propTypes = {
  counter: PropTypes.number.isRequired
};