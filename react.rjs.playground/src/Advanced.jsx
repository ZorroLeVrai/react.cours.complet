import Age from './Age'
import RenderPropExample from './RenderPropExample'
import DisplayFetchedData from './DisplayFetchedData'

function Advanced() {
  return (
    <>
      <h1 className='center'>Playground</h1>
      <div>
        <Age/>
      </div>
      <RenderPropExample text="Ecrivez un message" renderComponent={(t) => <div>Votre message: * {t} *</div>} />
      <DisplayFetchedData postid={1}/>
      <div id="modal-footer"></div>
    </>
  )
}

export default Advanced;
