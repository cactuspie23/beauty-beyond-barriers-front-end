import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SigninForm.module.css'
import * as authService from '../../services/authService'

const SigninForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })

  const navigate = useNavigate()
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  const handleChange = e => {
    updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  return (
    <div className={styles.page_container}>
      <p>{message}</p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}></label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder='EMAIL ADDRESS'
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}></label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            placeholder="PASSWORD"
          />
        </div>
        <button className={styles.button}>SIGN IN</button>
      </form>
    </div>
  )
}

export default SigninForm
