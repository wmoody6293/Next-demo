'use client'
import styles from './page.module.css'
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import Navbar from './components/navbar/Navbar';
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <h1>HomePage</h1>
    </>
  )
}
