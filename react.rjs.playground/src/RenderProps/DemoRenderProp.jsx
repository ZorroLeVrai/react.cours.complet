import RenderPropExample from './RenderPropExample';

const DemoRenderProp = () => {
  return (
    <>
      <h1 className='center'>Demo Render Props</h1>
      <RenderPropExample text="Ecrivez un message" renderComponent={(t) => <div>Votre message: * {t} *</div>} />
    </>
  )
}

export default DemoRenderProp;