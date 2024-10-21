import React from 'react'
import { Outlet } from "react-router-dom";
import LinkElement from './LinkElement';

const RouterLayout = () => {
  return (
    <>
      <div>
        <LinkElement to="/" text="Home" />
      </div>
      <div>
        <LinkElement to="/advanced" text="élements avancés" />
        <LinkElement to="/hoc" text="HOC" />
        <LinkElement to="/form" text="Example de form" />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default RouterLayout;