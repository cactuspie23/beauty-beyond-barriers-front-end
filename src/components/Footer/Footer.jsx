import styles from './Footer.module.css'

const Footer = ({ user }) => {
  return (
    <div id={styles.container}>
      <div className={styles.section}>
        <div>
          <h1>About Estée Lauder</h1>
          <div>Estée Lauder, Our Founder</div>
          <div>Careers</div>
          <div>Corporate Info</div>
        </div>
        <div>
          <h1>Find Us</h1>
          <div>Store Locator</div>

        </div>
        <div>
          <h1>Sign Up for Email</h1>
          <div>
            <input type="email" placeholder='SAMPLE@EMAIL.COM' />
            <button>GO</button>
          </div>
          <div>
            <input type="checkbox" />
            <div>By submitting your email, you agree to receive advertising emails from Estée Lauder. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <h1>Need Help?</h1>
          <div>Track My Order</div>
          <div>Beauty Chat</div>
          <div>Live Chat</div>
          <div>1.877.311.3883</div>
        </div>
        <div>
          <h1>Sign Up For SMS</h1>
          <div>
            <input type="tel" placeholder='(123)122-2234' />
            <button>GO</button>
          </div>
          <div>
            <input type="checkbox" />
            <div>By submitting your email, you agree to receive advertising emails from Estée Lauder. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>

      </div>
      <div className={styles.section}>

      </div>
    </div>
  )
}

export default Footer
