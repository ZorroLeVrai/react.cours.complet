import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from "./LinkElement.module.css";

const LinkElement = ({to, children}) => {
  return (
    <span className={styles.linkMargin}>
      <Link to={to}>{children}</Link>
    </span>
  )
}

LinkElement.propTypes = {
  to: PropTypes.string.isrequired,
  children: PropTypes.node
};

export default LinkElement;