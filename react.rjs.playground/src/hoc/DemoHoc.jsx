import PropTypes from 'prop-types';
import withToolTip from './withToolTip';
import SimpleTooltip from './SimpleTooltip';

const DemoHoc = ({age = 18}) => {
  return (
    <div data-testid="age_label" className="padding-medium border-light">Votre age: {age}</div>
  );
}

DemoHoc.propTypes = {
  age: PropTypes.number
};

export default withToolTip(DemoHoc, () => <SimpleTooltip text="Affiche votre age"/>);