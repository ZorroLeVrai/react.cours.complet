import React, { useState } from 'react'
import PortalModal from '../PortalModal';

/* Higher Order Component to add a tooltip to a React component*/
/* renderTooltip uses a render prop to render its component */

const withToolTip = (Component, renderTooltip) => {
  const EnhanceComponent = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const mouseOver = () => setShowTooltip(true);
    const mouseOut = () => setShowTooltip(false);
    return (
      <>
        <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <Component {...props} />
        </span>
        { showTooltip && renderTooltip() }
      </>
    );    
  };

  return EnhanceComponent;
}

export default withToolTip;