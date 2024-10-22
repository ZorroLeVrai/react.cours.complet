import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import DemoHoc from './hoc/DemoHoc';
import RouterLayout from './RouterLayout';
import Home from "./Home";
import DemoCustomHook from "./DemoCustomHook";
import './App.css'
import DemoPortal from "./Portal/DemoPortal";
import DemoRenderProp from "./RenderProps/DemoRenderProp";
import DemoForwardRef from "./forwardRef/DemoForwardRef";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RouterLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<DemoPortal/>} />
            <Route path="/hoc" element={<DemoHoc/>} />
            <Route path="/render_props" element={<DemoRenderProp/>} />
            <Route path="/custom_hook" element={<DemoCustomHook/>} />
            <Route path="/forward_ref" element={<DemoForwardRef />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;