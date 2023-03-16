import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import MobileDropdown from '../MobileDropdown/MobileDropdown'
import { useState, useEffect } from 'react'

const NavBar = ({ user, handleLogout, closeMobileMenu, isMobile }) => {
  const [dropdown, setDropdown] = useState(false)

  const closeDropdown = () => {
    setDropdown(false)
  }

  const openSecondLayer = () => {
    setDropdown(true)
  }

  useEffect(() => {

  }, [dropdown]);


  return (
    <div id={styles.first_tier}>
      {isMobile ?
        <div>
          <ul className={styles.links}>
            <li onClick={() => isMobile && closeMobileMenu()}>
              NEW
              <img src="./images/Nav/LargerThan.png" alt="larger than" />
            </li>
            <li onClick={() => isMobile && closeMobileMenu()}>BEST SELLERS<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>SKINCARE<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>MAKEUP<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li
              onClick={() => isMobile && openSecondLayer()}
            >
              <Link to="/bbb"><div>BBB<img src="./images/Nav/LargerThan.png" alt="larger than" /></div></Link>
            </li>
            <li onClick={() => isMobile && closeMobileMenu()}>FRAGRANCES<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>SETS & GIFTS<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>RE-NUTRIV<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>AERIN<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>DISCOVER<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>SERVICES<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>OFFERS<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => isMobile && closeMobileMenu()}>{user ?
              <p><Link to="" onClick={handleLogout}>LOG OUT</Link></p>
              :
              <p><Link to="/signin">SIGN IN</Link></p>
            }<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
          </ul>
          <div id={styles.dropdown_container}>
            {dropdown && <MobileDropdown dropdown={dropdown} closeDropdown={closeDropdown} closeMobileMenu={closeMobileMenu} />}
          </div>
        </div>
        :
        <ul className={styles.links}>
          <li>NEW</li>
          <li>BEST SELLERS</li>
          <li>SKINCARE</li>
          <li>MAKEUP</li>
          <li
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link to="/bbb">BBB</Link>
            <div id={styles.dropdown_container}>
              {dropdown && <DropdownMenu />}
            </div>
          </li>
          <li>FRAGRANCES</li>
          <li>SETS & GIFTS</li>
          <li>RE-NUTRIV</li>
          <li>AERIN</li>
          <li>DISCOVER</li>
          <li>SERVICES</li>
          <li>OFFERS</li>
        </ul>
      }
    </div>
  )
}

export default NavBar
