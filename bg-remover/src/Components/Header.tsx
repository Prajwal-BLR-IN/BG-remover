import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.ts'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'


const Header = () => {
  const { openSignIn } = useClerk()
  const { isSignedIn } = useUser()
  return (
    <header className='header'>
      <Link to='/' ><img src={assets.logo} className='logo' alt="logo" /></Link>
      {isSignedIn ? <UserButton/> : <button onClick={() => openSignIn({})} className='header-btn'>Get started <img src={assets.arrow_icon} alt="arrow icon" /></button>}
    </header>
  )
}

export default Header