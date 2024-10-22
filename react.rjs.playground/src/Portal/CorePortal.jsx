import withToolTip from '../hoc/withToolTip';
import PortalModal from './PortalModal';

const CorePortal = () => {
  return (
    <div className="padding-medium border-light">Passez la souris sur cet élément</div>
  )
};

export default withToolTip(CorePortal, () => <PortalModal>La souris sur l'élément</PortalModal>);