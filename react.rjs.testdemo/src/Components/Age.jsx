import { PropTypes } from 'prop-types';

const Age = ({age = 18}) => {
  return (
    <div data-testid="age_label">Votre age: {age}</div>
  );
};

Age.propTypes = {
  age: PropTypes.number
};

export default Age;