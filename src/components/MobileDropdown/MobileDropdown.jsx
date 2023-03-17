import { Link } from "react-router-dom";
import styles from './MobileDropdown.module.css'
// import { useEffect } from "react";

const MobileDropdown = ({dropdown, closeDropdown, closeMobileMenu}) => {
  return (
    <>
      {
        dropdown ?
          <ul className={styles.mobileDropdown}>
            <li onClick={() => closeDropdown()}><img src="./images/Nav/SmallerThan.png" alt="smaller than" />BEAUTY BEYOND BARRIERS</li>
            <li onClick={() => closeMobileMenu()}>Best Sellers<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => closeMobileMenu()}><Link to="/bbb"><div>Makeup<img src="./images/Nav/LargerThan.png" alt="larger \bbbthan" /></div></Link></li>
            <li onClick={() => closeMobileMenu()}><Link to="/bbb"><div>Skincare<img src="./images/Nav/LargerThan.png" alt="larger than" /></div></Link></li>
            <li onClick={() => closeMobileMenu()}><Link to="/kits"><div>Sets & Gifts<img src="./images/Nav/LargerThan.png" alt="larger than" /></div></Link></li>
            <li onClick={() => closeMobileMenu()}>Collections<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
            <li onClick={() => closeMobileMenu()}><Link to="/mission"><div>Our Mission<img src="./images/Nav/LargerThan.png" alt="larger than" /></div></Link></li>
            <li onClick={() => closeMobileMenu()}><Link to="/tutorials"><div>Accessibility Makeup Tutorials<img src="./images/Nav/LargerThan.png" alt="larger than" /></div></Link></li>
            <li onClick={() => closeMobileMenu()}>eSSENTIAL Accessibility Assistive Technology App<img src="./images/Nav/LargerThan.png" alt="larger than" /></li>
          </ul>
          :
          null
      }
    </>
  )
}

export default MobileDropdown