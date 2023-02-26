import styles from './BBB.module.css'

const BBB = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>BBB Page</h1>
      <div id={styles.content}>
        <img src="../images/people.png" alt="people" id={styles.people_img} />
        <div id={styles.info_section}>
          <h3>ONLINE EXCLUSIVE</h3>
          <h1>BEAUTY BEYOND BARRIERS</h1>
          <h2>A collection of our most accessible products.</h2>
          <div id={styles.icons}>
            <div className={styles.icons_col}>
              <div className={styles.icon}>
                <img src="../images/universal-icon.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
              <div className={styles.icon}>
                <img src="../images/universal-icon.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
            </div>
            <div className={styles.icons_col}>
              <div className={styles.icon}>
                <img src="../images/universal-icon.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
              <div className={styles.icon}>
                <img src="../images/universal-icon.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
            </div>
          </div>
          <img src='../images/tutorials-btn.png' alt="tutorial-button" id={styles.tutorials_btn} />
        </div>
      </div>
    </main>
  )
}

export default BBB
