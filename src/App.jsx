import {Header, Footer} from './components';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App