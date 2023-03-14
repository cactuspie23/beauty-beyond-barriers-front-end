import styles from './Mission.module.css'

const Mission = ({ windowWidth }) => {
  return (
    <main>
      <div className={styles.top}>
        <div className={styles.left}>
          {windowWidth >= 768 ?
            <>
              <h1>It's 2023. And in 2023, universal design matters.</h1>
              <h3>That's why we created Beauty Beyond Barriers, a collection of our most accessible makeup and skincare products.</h3>
            </>
            :
            <h1>In 2023, universal design matters.</h1>
          }
        </div>
        <img src='/images/Mission/Rectangle 42.png' alt='accessible beauty' className={styles.right} />
        {windowWidth <= 768 ? <h3>That's why we created Beauty Beyond Barriers, a collection of our most accessible makeup and skincare products.</h3> : null}
      </div>
      <div className={styles.mission}>
        <h2>A COLLECTION OF OUR MOST ACCESSIBLE PRODUCTS.</h2>
        <p>It is Estee Lauder's goal to create a setting in which people of disabilities have equal access to the beauty industry, and the company is dedicated to achieving this objective. The Beauty Beyond Barriers (BBB) collection is made from products that have been carefully selected with the intention of removing barriers in the world of cosmetics and making them accessible to people with disabilities.</p>
      </div>
      <div className={styles.accessibility}>
        <h2>Accessibility Matters</h2>
        <div className={styles.icons}>
          <div>
            <img src='/images/Mission/Group 1104.png' alt='hand' />
            {windowWidth >= 768 ?
              <p>GRIP FRIENDLY</p>
              :
              null
            }
          </div>
          <div>
            <img src='/images/Mission/Group 1103.png' alt='time' />
            {windowWidth >= 768 ?
              <p>EASY TO APPLY</p>
              :
              null
            }
          </div>
          <div>
            <img src='/images/Mission/Group 1105.png' alt='pigment' />
            {windowWidth >= 768 ?
              <p>HIGHLY PIGMENTED</p>
              :
              null
            }
          </div>
          <div>
            <img src='/images/Mission/Group 1106.png' alt='accessible' />
            {windowWidth >= 768 ?
              <p>ACCESSIBLE</p>
              :
              null
            }
          </div>
        </div>
      </div>
      <div className={styles.example}>
        <h2>WHEN A PRODUCT DESIGN WORKS FOR ONE PERSON, IT BECOMES EASIER FOR EVERYONE.</h2>
        <div className={styles.makeup}>
          {windowWidth >= 768 ?
            <>
              <div>
                <p>Double-sided applicator</p>
                <p>Square, matte handle is easy to grip</p>
              </div>
              <div>
                <img src='/images/Mission/My project-1.png' alt='lipstick' />
              </div>
              <div>
                <p>Square container won't roll off the table</p>
              </div>
            </>
            :
            <>
              <div>
                <img src='/images/Mission/My project-1.png' alt='lipstick' />
              </div>
              <div>
                <p>Double-sided applicator</p>
                <p>Square container won't roll off the table</p>
                <p>Square, matte handle is easy to grip</p>
              </div>
            </>
          }
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <img src='/images/Mission/Rectangle 4400.png' alt='makeup' />
        </div>
        <div>
          <p>We seek to create the kind of beauty that is accessible to everybody and centered on the requirements of the user. We question the norms of conventional beauty in order to produce something that is accessible to everyone by focusing on the needs of the end user.</p>
        </div>
      </div>
    </main>
  )
}

export default Mission