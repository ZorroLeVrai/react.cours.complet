import PortalModal from '../Portal/PortalModal';

const SimpleTooltip = ({text}) => {
  return (
    <>
      <div className="tooltip">
        <span className="tooltiptext">{text}</span>
      </div>
      <PortalModal>{text}</PortalModal>
    </>
  )
}

export default SimpleTooltip;