import PropTypes from 'prop-types';
import withToolTip from './withToolTip';
import Tooltip from '../Tooltip';

const DemoHoc = ({age = 18}) => {
  return (
    <div data-testid="age_label" className="padding-medium border-light">Votre age: {age}</div>
  );
}

DemoHoc.propTypes = {
  age: PropTypes.number
};

export default withToolTip(DemoHoc, () => <Tooltip text="Affiche votre age"/>);