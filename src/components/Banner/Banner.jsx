import styles from './Banner.module.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className={styles.head}>
      <img src='./images/Landing/Default1.png' alt='Woman in a wheelchair with plant design' />
      <div className={styles.textBlock}>
        <h3>A COLLECTION OF OUR MOST ACCESSIBLE PRODUCTS.</h3>
        <h1>Beauty Beyond Barriers</h1>
        <p>Inclusive, accessible, user-centric beauty. We challenge the conventions of universal beauty to create something inclusive through user-centric products.</p>
        <Link to='/bbb'>
          <button>Browse the Collection</button>
        </Link>
      </div>
    </div>
  )
}
    
export default Banner