import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      <div className={styles.line}></div>
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
      <div >
        <ul className={styles.links}>
          <li>NEW</li>
          <li>BEST SELLERS</li>
          <li>SKINCARE</li>
          <li>MAKEUP</li>
          <li><Link to="/bbb">BBB</Link></li>
          <li>FRAGRANCES</li>
          <li>SETS & GIFTS</li>
          <li>RE-NUTRIV</li>
          <li>AERIN</li>
          <li>DISCOVER</li>
          <li>SERVICES</li>
          <li>OFFERS</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
