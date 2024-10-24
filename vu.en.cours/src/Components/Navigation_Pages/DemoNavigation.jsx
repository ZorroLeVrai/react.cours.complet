import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

const DemoNavigation = () => {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  )
}

export default DemoNavigation;