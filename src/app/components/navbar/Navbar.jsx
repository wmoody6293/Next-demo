'use client'
import styles from './navbar.module.css'
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react'
export default function Navbar() {

  const [username, setUsername] = useState('Welcome');
  useEffect(() => {
    let user;
    user = localStorage.getItem('user') || 'Welcome';
    if(user !== 'Welcome'){
      user = JSON.parse(user).username;
      setUsername(user);
    }
  },[])
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('user');
    router.push('/login')
  }
  const logoutUser = async () => {
    try {
      await axios.get('/api/users/logout');
      logout();
      router.push('/login');
    } catch (error) {
      console.log('error in logout process: ', error.message)
    }
  }
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-element"]}>
        <div className={styles['welcome-container']}>
          <h2>{username}</h2>
        </div>
      </div>
      <div className={styles["nav-element"]}>
        <div className={styles["logout-container"]}>
          <div className={styles["logout-btn"]} onClick={logoutUser}>Logout</div>
        </div>
      </div>
    </nav>
  )
}