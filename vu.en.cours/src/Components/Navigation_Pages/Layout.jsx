import { Outlet, useNavigate } from 'react-router-dom';
import LinkElement from './LinkElement';

const Layout = () => {
  const navigate = useNavigate();

  const navigateToPreviousPage = () => navigate(-1);

  return (
    <>
      <nav>
        <LinkElement to="/">Home</LinkElement>
        <LinkElement to="/about">About</LinkElement>
        <LinkElement to="/contact">Contact</LinkElement>
      </nav>
      <div>
        <button onClick={navigateToPreviousPage}>Retour</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout;