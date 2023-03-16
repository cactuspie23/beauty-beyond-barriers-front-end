import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'
import { Link } from "react-router-dom"

const Navigation = ({ user, handleLogout }) => {
  return (
    <>
    <div className={styles.middle}>
        <div className={styles.left}>
          <Link to='/'><img src='/images/Nav/logo.png' alt='logo' /></Link>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            {user ?
              <>
                <p>Welcome, {user.name}</p>
                <p><Link to="" onClick={handleLogout}>LOG OUT</Link></p>
              </>
              :
              <p><Link to="/signin">SIGN IN</Link></p>
            }
            <p>Join Estee E-List Loyalty</p>
          </div>
          <div className={styles.icons}>
            <img src='/images/Nav/cart.png' alt='cart' />
            <img src='/images/Nav/search.png' alt='search' />
          </div>
        </div>
      </div>
    <nav className={styles.navigation}>
      <NavLinks user={user} handleLogout={handleLogout} />
    </nav>
    </>
  )
}

export default Navigation