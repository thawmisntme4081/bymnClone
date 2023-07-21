import { FC } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

interface IUserAuthProps {}

const UserAuth: FC<IUserAuthProps> = () => {
  return (
    <IconContext.Provider value={{ size: '24', style: { cursor: 'pointer' } }}>
      <FaRegUserCircle />
    </IconContext.Provider>
  )
}

export default UserAuth
