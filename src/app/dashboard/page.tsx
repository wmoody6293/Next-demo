'use client'
import styles from './dashboard.module.css'
import { useContext } from 'react'
import { useAppContext } from '@/providers/context/ContextProvider'
import FilterBar from './components/FilterBar'
import MakeCard from './components/MakeCard'
import Loading from './components/Loading'
export default function Dashboard() {
  const { data, isSuccess, option} = useAppContext();
  if(isSuccess){
    return (
      <div>
      <FilterBar />
        <div className={styles.canvas}>
          {data[option].map((obj:any) => <MakeCard key={`${option}-${obj.id}`} data={obj} />)}
        </div>
    </div>
    )
  }
  return (
    <>
    <FilterBar />
    <div className={styles.canvas}><Loading /></div>
    </>
  )
}
