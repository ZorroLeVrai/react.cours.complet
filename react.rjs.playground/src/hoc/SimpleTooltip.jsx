const SimpleTooltip = ({text}) => {
  return (
    <>
      <div className="tooltip">
        <span className="tooltiptext">{text}</span>
      </div>
    </>
  )
}

export default SimpleTooltip;