import React from 'react'

const RenderPropExample = ({text, renderComponent}) => {
  return (
    <>
      <div>{text}</div>
      {renderComponent(text)}
    </>
  )
}

export default RenderPropExample;