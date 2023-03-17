import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'
import { useState } from "react"
import { Link } from "react-router-dom"

const MobileNavBar = ({ user, handleLogout }) => {

  const [open, setOpen] = useState(false)

  const hamburgerIcon =
    <img src='/images/Nav/hamburger.png' alt='menu' className={styles.hamburger}
      size="30px"
      color="black"
      onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false)

  return (
    <div>
      <nav className={styles.mobileNavigation}>
        <div>
          {hamburgerIcon}
          <img src="./images/Nav/search.png" alt="search" />
        </div>
        <Link to='/'><img src='/images/Nav/logo.png' alt='logo' /></Link>
        <div>
          {user ?
            <>
              <div><Link to="" onClick={handleLogout}>LOG OUT</Link></div>
            </>
            :
            <div><Link to="/signin">SIGN IN</Link></div>
          }
          <img src='/images/Nav/cart.png' alt='cart' />
        </div>
      </nav>
      <div>
        {open && <NavLinks user={user} handleLogout={handleLogout}
          closeMobileMenu={closeMobileMenu} isMobile={true} />}
      </div>
    </div>
  )
}

export default MobileNavBar