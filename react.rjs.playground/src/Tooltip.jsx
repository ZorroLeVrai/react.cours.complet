import React from 'react'
import PortalModal from './PortalModal';

const Tooltip = ({text}) => {
  return (
    <>
      <div className="tooltip">
        <span className="tooltiptext">{text}</span>
      </div>
      <PortalModal>{text}</PortalModal>
    </>
  )
}

export default Tooltip;