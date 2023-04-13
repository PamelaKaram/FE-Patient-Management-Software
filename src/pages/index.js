import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '../Components/Sidenav1';
import Apl from '../Components/AppointmentList';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Sidebar/>
      </main>
      <main className={Apl.main}>
        <Apl/>
      </main>
    </>
  )
}