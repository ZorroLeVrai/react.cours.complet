import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import DemoHoc from './hoc/DemoHoc';
import RouterLayout from './RouterLayout';
import Home from "./Home";
import Advanced from "./Advanced";
import { FormExample } from "./FormExample";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RouterLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/advanced" element={<Advanced/>} />
            <Route path="/hoc" element={<DemoHoc/>} />
            <Route path="/form" element={<FormExample/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;