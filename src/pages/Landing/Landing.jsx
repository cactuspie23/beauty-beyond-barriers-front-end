import styles from './Landing.module.css'
import Banner from '../../components/Banner/Banner'

const Landing = () => {
  return (
    <main className={styles.landingContainer}>
      <Banner />
      <div className={styles.bannerContent}>
        <img src='./images/Landing/BestSelling.png' alt='Best-selling beauty' />
        <img src='./images/Landing/RepairCream.png' alt='Repair Cream' />
        <img src='./images/Landing/WinterRefresh.png' alt='Winter Refresh' />
        <img src='./images/Landing/SeeIt.png' alt='Try it on' />
        <img src='./images/Landing/Posts.png' alt='Favorite Posts' />
      </div>

    </main>
  )
}

export default Landing
