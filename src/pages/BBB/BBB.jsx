import styles from './BBB.module.css'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'


const BBB = ({ products, windowWidth }) => {
  return (
    <main className={styles.container}>
      <div id={styles.first_section} >
        <div id={styles.title_section}>
          <img src="../images/BBB/people.png" alt="people" id={styles.people_img} />
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
                  <div>Grip Friendly</div>
                </div>
              </div>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/highly-pigmented.png" alt='accessible-icons' />
                  <div>Highly-Pigmented</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/easy-applicator.png" alt='accessible-icons' />
                  <div>Easy Applicator</div>
                </div>
              </div>
            </div>
            <div>
              <Link to="/tutorials">
                <button id={styles.tutorials_btn}>WATCH TUTORIALS</button>
              </Link>
            </div>
          </div>
        </div>
        <div id={styles.introduction}>
          <p>
            Estee Lauder is committed to fostering an environment in which individuals with disabilities have equal access to the beauty industry. The Beauty Beyond Barriers (BBB) collection is comprised of hand-picked items that are aimed at lowering entry barriers to the world of cosmetics and making them more disability-friendly.
          </p>
        </div>
      </div>
      <div id={styles.second_section} className={styles.section}>
        <div>Makeup</div>
        <div className={styles.filter}>
          <div>FILTER BY</div>
          {windowWidth >= 768 ?
            <>
              <div>COLLECTION</div>
              <div>FINISH</div>
              <div>COLOR FAMILY</div>
            </>
            :
            null
          }
          <div className={styles.option} id={styles.sort_by1}>
            <div>
              SORT BY
            </div>
            <img src="../../images/sort-down.png" alt="short-down-icon" />
          </div>
        </div>
        <div className={styles.products}>
          {products.map((product, idx) => (
            (product.category === "Makeup") ? <Product product={product} key={idx} /> : null
          ))}
        </div>
      </div>
      <div id={styles.third_section} className={styles.section}>
        <div>Skincare</div>
        <div className={styles.filter}>
          <div>FILTER BY</div>
          {windowWidth >= 768 ?
            <>
              <div className={styles.option}>
                <div>
                  CATEGORY
                </div>
                <img src="../../images/sort-down.png" alt="short-down-icon" />
              </div>
              <div className={styles.option}>
                <div>COLLECTION</div>
                <img src="../../images/sort-down.png" alt="short-down-icon" />
              </div>
              <div className={styles.option}>
                <div>
                  SKIN TYPE
                </div>
                <img src="../../images/sort-down.png" alt="short-down-icon" />
              </div>
              <div className={styles.option}>
                <div>
                  SKIN CONCERNS
                </div>
                <img src="../../images/sort-down.png" alt="short-down-icon" />
              </div>
            </>
            :
            null
          }
          <div className={styles.option} id={styles.sort_by2}>
            <div>
              SORT BY
            </div>
            <img src="../../images/sort-down.png" alt="short-down-icon" />
          </div>
        </div>
        <div className={styles.products}>
          {products.map((product, idx) => (
            (product.category === "Skincare") ? <Product product={product} key={idx} /> : null
          ))}
        </div>
      </div>
    </main>
  )
}

export default BBB
