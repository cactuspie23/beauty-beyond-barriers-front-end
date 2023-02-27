import styles from './BBB.module.css'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'

const BBB = ({ user }) => {
  return (
    <main className={styles.container}>
      <div id={styles.first_section}>
        <div id={styles.title_section}>
          <img src="../images/people.png" alt="people" id={styles.people_img} />
          <div id={styles.info_section}>
            <div id={styles.title}>
              <div>ONLINE EXCLUSIVE</div>
              <div>Beauty Beyond Barriers</div>
              <div>A collection of our most accessible products.</div>
            </div>
            <div id={styles.icons}>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/universal-icon.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/grip-friendly.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
              </div>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/highly-pigmented.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/easy-applicator.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
              </div>
            </div>
            <Link>
              <button id={styles.tutorials_btn}>WATCH TUTORIALS</button>
            </Link>
          </div>
        </div>
        <div id={styles.introduction}>
          <p>
            Estee Lauder is committed to fostering an environment in which individuals with disabilities have equal access to the beauty industry. The Beauty Beyond Barriers (BBB) collection is comprised of hand-picked items that are aimed at lowering entry barriers to the world of cosmetics and making them more disability-friendly.
          </p>
        </div>
      </div>
      <div id={styles.second_section}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div id={styles.third_section}>

      </div>
    </main>
  )
}

export default BBB
