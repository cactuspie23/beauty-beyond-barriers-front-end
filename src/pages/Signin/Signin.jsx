import { useState } from 'react'
import SigninForm from '../../components/SigninForm/SigninForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signin.module.css'

const Signin = props => {
  let [selectSignin, setSelectSignin] = useState(true)

  const toggleSelect = (status) => {
    setSelectSignin(status)
  }

  return (
    <main className={styles.container}>
      <div className={styles.card_container}>
        <div className={styles.btns_container}>
          <button onClick={() => toggleSelect(true)} autoFocus style={{"outline":"none"}}>SIGN IN</button>
          <button onClick={() => toggleSelect(false)}>CREATE ACCOUNT</button>
        </div>
        <div className={styles.form_container}>
          {selectSignin ?
            <SigninForm handleSignupOrLogin={props.handleSignupOrLogin} />
            :
            <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
          }
        </div>
      </div>
    </main>
  )
}

export default Signin
