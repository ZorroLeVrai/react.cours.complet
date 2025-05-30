import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const MainPage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default MainPage;