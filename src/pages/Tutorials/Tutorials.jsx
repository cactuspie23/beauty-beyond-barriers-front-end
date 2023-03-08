import styles from './Tutorials.module.css'

const Tutorials = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>BEYOND BEAUTY TUTORIALS</h1>
      <div>These tutorials are designed to help people with disabilities apply makeup in a way that is not exhausting. We are here to help you make your life easier. </div>
      <div className={styles.sec}>
        <div className={styles.text}>
          <h2>Suzy's Tutorial</h2>
          <p>Suzy has a muscular degenerative disorder, but that doesn’t stop her from doing her own makeup. She’ll walk you through her makeup routine and favorite products.</p>
          <div className={styles.recommend}>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Eye Repair</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Radiance Liquid Foundation</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Color Envy Lipstick</label>
            </div>
            <button>ADD TO BAG</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src='../../images/Tutorials/Suzy.png' alt="Suzy" className={styles.person_img} />
        </div>
      </div>
      <div className={styles.sec}>
        <div className={styles.image}>
          <img src='../../images/Tutorials/Suzy.png' alt="Suzy" className={styles.person_img} />
        </div>
        <div className={styles.text}>
          <h2>Suzy's Tutorial</h2>
          <p>Suzy has a muscular degenerative disorder, but that doesn’t stop her from doing her own makeup. She’ll walk you through her makeup routine and favorite products.</p>
          <div className={styles.recommend}>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Eye Repair</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Radiance Liquid Foundation</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Color Envy Lipstick</label>
            </div>
            <button>ADD TO BAG</button>
          </div>
        </div>

      </div>
      <div className={styles.sec}>
        <div className={styles.text}>
          <h2>Suzy's Tutorial</h2>
          <p>Suzy has a muscular degenerative disorder, but that doesn’t stop her from doing her own makeup. She’ll walk you through her makeup routine and favorite products.</p>
          <div className={styles.recommend}>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Eye Repair</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Radiance Liquid Foundation</label>
            </div>
            <div className={styles.product}>
              <input type="checkbox" />
              <img src='../../images/lipstick.png' alt="lipstick" />
              <label >Color Envy Lipstick</label>
            </div>
            <button>ADD TO BAG</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src='../../images/Tutorials/Suzy.png' alt="Suzy" className={styles.person_img} />
        </div>
      </div>
    </main>
  )
}

export default Tutorials
