'use client'
import Link from "next/link";
import {useState, useRef} from 'react';
import {useRouter} from 'next/navigation';
import axios from "axios";
import { Response } from "@/shared/types/axiosTypes";
import styles from './register.module.css'
import { useAppContext } from "@/providers/context/ContextProvider";
export default function Register() {
  //redirect to login page
  const router = useRouter();
  const {setUser} = useAppContext();
  const usernameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false)

  const checkVals = () => {
    const username = usernameInput.current && usernameInput.current.value.length > 0;
    const email = emailInput.current && emailInput.current.value.length > 0;
    const password = passwordInput.current && passwordInput.current.value.length > 0;
    if(username && email && password){
      setUsernameError(false);
      setEmailError(false);
      setPasswordError(false);
      return true;
    }else{
      setError('All Fields Must Be Filled Out')
      if(!username) setUsernameError(true);
      if(!email) setEmailError(true);
      if(!password) setPasswordError(true);
    }
  }
  const postRegister = async(e:React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const fields = checkVals();
    if(fields === true){
      const formData = {username: usernameInput.current?.value, email: emailInput.current?.value, password: passwordInput.current?.value}
      const response:Response = await axios.post('/api/users/register', formData);
      const data = response.data;
      console.log('data: ', data)
      if(data.success){
        localStorage.setItem('user', JSON.stringify(data.user));
        await setUser(data.user);
        router.push('/dashboard')
        setLoading(false)
      }else{
        setError('Error on register')
      }
    }else{
      setLoading(false)
      return;
    }

   }
  return (
    <section className={styles.canvas}>
          <div className={error.length > 0 ? styles["error-container"] : styles.hidden}>
           {error ? <p className={styles["error-message"]}>{error}</p> : <p></p>}
         </div>
      <div className={styles.container}>
        <h1 className={styles["form-header"]}>{loading ? 'Loading...' : "Sign Up"}</h1>
        <div className={styles["form-container"]}>
          <div className={styles["input-container"]}>
            <label className={styles.label} htmlFor="username">Username: </label>
            <input required id="username" className={usernameError ? styles["input-error"] : styles.input} type="text" placeholder="Username" name="username" ref={usernameInput}/>
          </div>

          <div className={styles["input-container"]}>
            <label className={styles.label} htmlFor="email">Email: </label>
            <input required id="email" className={emailError ? styles["input-error"] : styles.input} type="email" placeholder="Your email" name="email" ref={emailInput}/>
          </div>

          <div className={styles["input-container"]}>
            <label className={styles.label} htmlFor="password">Password: </label>
            <input required id="password" className={passwordError ? styles["input-error"]: styles.input} type="password" placeholder="Password" name="password" ref={passwordInput}/>
          </div>

          <div className={styles["button-container"]}>
            <button onClick={postRegister} className={styles.button} type="submit">Sign Up</button>
          </div>

        </div>

        <div className={styles.redirect}>
          <p>Already have an account?</p>
          <Link href="/login">
            <span>Login</span>
          </Link>

        </div>
      </div>

    </section>
  )
}
  