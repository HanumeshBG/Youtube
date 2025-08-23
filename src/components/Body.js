import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex h-[90%]'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body