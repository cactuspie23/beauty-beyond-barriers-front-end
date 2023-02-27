import styles from './BBB.module.css'
import { Link } from 'react-router-dom'

const BBB = ({ user }) => {
  return (
    <main className={styles.container}>
      <div id={styles.content}>
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
    </main>
  )
}

export default BBB
