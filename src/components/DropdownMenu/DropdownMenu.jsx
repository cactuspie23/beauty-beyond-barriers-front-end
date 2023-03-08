import { Link } from "react-router-dom";
import styles from './DropdownMenu.module.css'

const DropdownMenu = () => {
  return(
    <div className={styles.dropdown}>
      <div className={styles.dleft}>
        <div>
          <h1>Beauty Beyond Barriers</h1>
          <p>The Beauty Beyond Barriers (BBB) collection is comprised of hand-picked items that are aimed at lowering entry barriers to the world of cosmetics and making them more disability-friendly.</p>
        </div>
        <div>
          <h3>CATEGORIES</h3>
          <ul>
            <li>Best Sellers</li>
            <li>Makeup</li>
            <li>Skincare</li>
            <li>Sets & Gifts</li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h3>LEARN MORE</h3>
          <ul>
            <li>Our Mission</li>
            <li>Accessibility Makeup Tutorials</li>
            <li>eSSENTIAL Accessibility Assistive Technology App</li>
          </ul>
        </div>
      </div>

      <div className={styles.dright}>
        <img src="./images/Nav/Image1.png" alt="Accessible Beauty" />
        <img src="./images/Nav/Image2.png" alt="Accessible Beauty" />
        <img src="./images/Nav/Image3.png" alt="Accessible Beauty" />
      </div>
    </div>
  )
}

export default DropdownMenu