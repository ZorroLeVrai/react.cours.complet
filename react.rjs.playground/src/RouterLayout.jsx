import { Outlet } from "react-router-dom";
import LinkElement from './LinkElement';

const RouterLayout = () => {
  return (
    <>
      <div>
        <LinkElement to="/" text="Home" />
      </div>
      <div>
        <LinkElement to="/portal" text="Portal" />
        <LinkElement to="/hoc" text="HOC" />
        <LinkElement to="/render_props" text="Render Props" />
        <LinkElement to="/custom_hook" text="Custom Hook" />
        <LinkElement to="/forward_ref" text="Forward Ref" />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default RouterLayout;