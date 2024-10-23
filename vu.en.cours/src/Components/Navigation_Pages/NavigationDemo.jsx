import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

const NavigationDemo = () => {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  )
}

export default NavigationDemo;