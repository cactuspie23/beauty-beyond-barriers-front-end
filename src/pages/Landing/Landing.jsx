import styles from './Landing.module.css'
import Banner from '../../components/Banner/Banner'
import { useEffect, useState } from 'react';

const Landing = () => {

  const [windowWidth, setWindowWidth] = useState(1024)

  const getSize= () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);


  return (
    <main className={styles.landingContainer}>
      <Banner />
      {/* {console.log(window.innerWidth)} */}
      <div className={styles.bannerContent}>
        {
          windowWidth >= 768 ?
          <div className={styles.bannerContent}>
              <img src='./images/Landing/BestSelling.png' alt='Best-selling beauty' />
              <img src='./images/Landing/RepairCream.png' alt='Repair Cream' />
              <img src='./images/Landing/WinterRefresh.png' alt='Winter Refresh' />
              <img src='./images/Landing/SeeIt.png' alt='Try it on' />
              <img src='./images/Landing/Posts.png' alt='Favorite Posts' />
            </div>
            :
            <div className={styles.bannerContent}>
              <img src='./images/Landing/BestSellingTitle.png' alt='Best Selling Title' className={styles.title} />
              <img src="./images/Landing/BestSellingMobile.png" alt="Best Selling Products" />
              <img src="./images/Landing/AdvancedNight.png" alt="Advanced Night Products" />
              <img src="./images/Landing/WinterRefreshTitle.png" alt="Winter Refresh Title" className={styles.title} />
              <img src="./images/Landing/WinterRefreshProducts.png" alt="Winter Refresh Products" />
              <img src="./images/Landing/SeeItOnYou.png" alt="See It On You Products" />
            </div>
        }
      </div>

    </main>
  )
}

export default Landing
