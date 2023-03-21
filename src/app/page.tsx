import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    
    </Head>
    <main className={styles.main}>
      <h1>Welcome</h1>
      </main>
      </>
  )
}
