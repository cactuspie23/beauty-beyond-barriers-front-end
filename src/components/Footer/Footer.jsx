import styles from './Footer.module.css'

const Footer = ({ user }) => {
  return (
    <div id={styles.container}>
      <div className={styles.large_sec}>
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
            <img src='../../images/social_media.png' alt='social media' />
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

        </div>
        <div className={styles.section}>
          <h1>Custom Care</h1>
          <div>Returns & Exchanges</div>
          <div>FAQs</div>
          <div>Shipping Information</div>
          <div>Afterpay</div>
          <div>More</div>
        </div>
        <div className={styles.section}>
          <h1>Privacy & Terms</h1>
          <div>Privacy Policy <span>(NEW)</span></div>
          <div>Do Not Sell or Share My Personal Information / Targeted Ads</div>
          <div>Terms & Conditions</div>
          <div>Accessibility</div>
        </div>
      </div>

      <div className={styles.large_sec} id={styles.second_large_sec}>
        <div className={styles.sign_up}>
          <h1>Sign Up for Email</h1>
          <div className={styles.inputs}>
            <input type="email" placeholder='SAMPLE@EMAIL.COM' />
            <button>GO</button>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div>By submitting your email, you agree to receive advertising emails from Estée Lauder. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.</div>
          </div>
        </div>
        <div className={styles.sign_up}>
          <h1>Sign Up For SMS</h1>
          <div className={styles.inputs}>
            <input type="tel" placeholder='(123)122-2234' />
            <button>GO</button>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div>By clicking “Submit”, you agree to receive recurring automated/prerecorded/artificial voice marketing calls and/or text messages at the number provided above from Estée Lauder, and/or its affiliates or service providers to that number, including calls or text messages sent through an automated system for the selection or dialing of telephone numbers or the playing of a recorded message. You consent to receive such calls & messages notwithstanding any prior registration of your phone number on any "Do Not Call" list. You are not required to directly or indirectly agree to receive such calls or text messages as a condition of purchasing any property, goods, or services. Msg & Data rates may apply. Text STOP to cancel. Text HELP for help. Message frequency may vary. Click here for Terms & Conditions and Privacy Policy.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
