import { Link } from "react-router-dom";
import styles from './DropdownMenu.module.css'

const DropdownMenu = () => {
  return(
    <div className={styles.dropdown}>
      <div className={styles.dleft}>
        <div className={styles.head}>
          <h1>Beauty Beyond Barriers</h1>
          <p>The Beauty Beyond Barriers (BBB) collection is comprised of hand-picked items that are aimed at lowering entry barriers to the world of cosmetics and making them more disability-friendly.</p>
        </div>
        <div>
          <h3>CATEGORIES</h3>
          <ul>
            <li>Best Sellers</li>
            <li><Link to="/bbb">Makeup</Link></li>
            <li><Link to="/bbb">Skincare</Link></li>
            <li><Link>Sets & Gifts</Link></li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h3>LEARN MORE</h3>
          <ul>
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link>Accessibility Makeup Tutorials</Link></li>
            <li>eSSENTIAL Accessibility Assistive Technology App</li>
          </ul>
        </div>
      </div>

      <div className={styles.dright}>
        <div className={styles.pics}>
          <img src="./images/Nav/Image1.png" alt="Accessible Beauty" />
          <img src="./images/Nav/Image2.png" alt="Accessible Beauty" />
          <img src="./images/Nav/Image3.png" alt="Accessible Beauty" />
        </div>
        <div className={styles.desc}>
          <p>GRIP-FRIENDLY PACKAGING</p>
          <p>DESIGNED FOR MOBILITY</p>
          <p>ACCESSIBILITY TUTORIALS</p>
        </div>
        <div>
          <img src="./images/Nav/Accessible.png" alt="Accessible" />
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu