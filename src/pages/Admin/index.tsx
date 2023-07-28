import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface IAdminProps {}

const Admin: FC<IAdminProps> = () => {
  return <Navigate to={'/admin'} replace />
}

export default Admin
