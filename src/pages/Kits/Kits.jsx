import styles from './Kits.module.css'
import KitCard from '../../components/KitCard/KitCard'
import { kitData } from '../../components/KitCard/KitsData.js'

const Kits = () => {
  return (
    <main className={styles.container}>
      <div id={styles.first_section} >
        <div id={styles.title_section}>
          <img src="../images/Kit/kit.png" alt="people" id={styles.people_img} />
          <div id={styles.info_section}>
            <div id={styles.title}>
              <div>ONLINE EXCLUSIVE</div>
              <div>FREE FIVE PIECE GIFT</div>
              <div>Chosen for accessibility and ease of use. </div>
              <br />
              <div>Yours with any $45 purchase, while supplies last.  </div>
              <br />
              <div id={styles.kits_desc}>
                <div>The products in the kits are</div>
                <ol id={styles.kits}>
                  <li>
                    Easy to grip
                  </li>
                  <li>
                    Highly pigmented
                  </li>
                  <li>
                    Easy to apply
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.second_section} className={styles.section}>
        <div className={styles.category}>Accessible Beauty Kits</div>
        <div className={styles.filter}>
          <div>FILTER BY</div>
          <div>COLLECTION</div>
          <div>FINISH</div>
          <div>COLOR FAMILY</div>
        </div>
        <div className={styles.products}>
          {kitData.map((kit, i) => 
          <div>
            <KitCard
            key={i}
            name={kit.name}
            image={kit.image}
            shortDescription={kit.shortDescription}
            description={kit.description}
            price={kit.price}
            />
            <button>ADD GIFT</button>
          </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Kits
