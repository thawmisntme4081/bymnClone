import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../pages/Admin/Menu'
import Navbar from '../pages/Admin/Navbar'

interface IAdminLayoutProps {}

const AdminLayout: FC<IAdminLayoutProps> = () => {
  return (
    <div className="bg-[#2a3447]">
      <Navbar />
      <div className="flex">
        <Menu />
        <div className="px-5 py-2 w-full min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
