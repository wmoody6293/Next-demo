'use client'
import Link from "next/link";
import {useState, useRef} from 'react';
import {useRouter} from 'next/navigation';
import styles from './login.module.css'
import {LoginData} from '@/shared/types/userTypes'
import { Response } from "@/shared/types/axiosTypes";
import axios from 'axios';
import { useAppContext } from "@/providers/context/ContextProvider";
export default function Login() {
   //redirect to login page
  const {user, setUser} = useAppContext();
   const router = useRouter();

   const userInput = useRef<HTMLInputElement>(null);
   const passwordInput = useRef<HTMLInputElement>(null);
   const [error, setError] = useState('')
   const [userError, setUserError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkVals = () => {
    const user= userInput.current && userInput.current.value.length > 0;
    const password = passwordInput.current && passwordInput.current.value.length > 0;
    if(user && password){
      setUserError(false)
      setPasswordError(false);
      return true;
    }else{
      setError('All Fields Must Be Filled Out')
      if(!user) setUserError(true);
      if(!password) setPasswordError(true);
      return false;
    }
  }
   const postLogin = async(formData:LoginData) => {
    setIsLoading(true);
    const response:Response = await axios.post('/api/users/login', formData);
    const data = response.data;
    if(data.success){
      await setUser(data.user);
      setPasswordError(false);
      setUserError(false);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
      setIsLoading(false)
    }else{
      setError(data.message)
    }
   }
 
   async function signIn() {
     try {
      const fields = checkVals();
      if(fields){
        const formData = {user: userInput.current!.value, password: passwordInput.current!.value};
        await postLogin(formData)
      }else{
        return;
      }
     
     } catch (error:any) {
       //handles when there is server error, or user exists
       console.log('Failed to sign up the user: ', error);
       setError(error);
     }
   }
   return (
     <section className={styles.canvas}>
          <div className={error.length > 0 ? styles["error-container"] : styles.hidden}>
           {error ? <p className={styles["error-message"]}>{error}</p> : <p></p>}
         </div>

       <div className={styles.container}>
         <h1 className={styles["form-header"]}>{isLoading ? 'Loading...' : "Login"}</h1>
         <div className={styles["form-container"]}>
 
           <div className={styles["input-container"]}>
             <label className={styles.label} htmlFor="email">Username or Email: </label>
             <input required id="emailOrEmail" className={userError ? styles["input-error"]: styles.input} type="email" placeholder="Your email or username" name="email" ref={userInput}/>
           </div>
 
           <div className={styles["input-container"]}>
             <label className={styles.label} htmlFor="password">Password: </label>
             <input required id="password" className={passwordError ? styles["input-error"]: styles.input} type="password" placeholder="Password" name="password" ref={passwordInput}/>
           </div>
 
           <div className={styles["button-container"]}>
             <button onClick={signIn} className={styles.button} type="submit">Login</button>
           </div>
 
         </div>
 
         <div className={styles.redirect}>
           <p>Already have an account?</p>
           <Link href="/register">
             <span>Create Account</span>
           </Link>
 
         </div>
       </div>
 
     </section>
   )
}
