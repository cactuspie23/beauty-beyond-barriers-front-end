import styles from './NavBar.module.css'
import MobileNavBar from "./MobileNavBar"
import Navigation from "./Navigation"


const NavBar = ({ user, handleLogout, windowWidth }) => {
  return (
    <nav>
      <div className={styles.line}></div>
      {windowWidth >= 768 ?
        <Navigation user={user} handleLogout={handleLogout} />
        :
        <MobileNavBar user={user} handleLogout={handleLogout} />
      }
    </nav>
  )
}

export default NavBar
