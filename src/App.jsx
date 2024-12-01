import Navbar from './components/ui/uicomponents/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-full linearGradient'>
      <Navbar />
      <Outlet />
    </div>
  )
};

export default App;