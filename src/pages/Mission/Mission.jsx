import styles from './Mission.module.css'

const Mission = () => {
  return (
    <main>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>It's 2023. And in 2023, universal design matters.</h1>
          <h3>That's why we created Beauty Beyond Barriers, a collection of our most accessible makeup and skincare products.</h3>
        </div>
        <img src='/images/Mission/Rectangle 42.png' alt='accessible beauty' className={styles.right} />
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
            <p>GRIP FRIENDLY</p>
          </div>
          <div>
            <img src='/images/Mission/Group 1103.png' alt='time' />
            <p>EASY TO APPLY</p>
          </div>
          <div>
            <img src='/images/Mission/Group 1105.png' alt='pigment' />
            <p>HIGHLY PIGMENTED</p>
          </div>
          <div>
            <img src='/images/Mission/Group 1106.png' alt='accessible' />
            <p>ACCESSIBLE</p>
          </div>
        </div>
      </div>
      <div>
        <h2>WHEN A PRODUCT DESIGN WORKS FOR ONE PERSON, IT BECOMES EASIER FOR EVERYONE.</h2>
        <div>
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
        </div>
      </div>
    </main>
  )
}

export default Mission