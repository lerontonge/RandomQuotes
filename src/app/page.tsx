import Image from 'next/image'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'

const mont = Montserrat({ weight: '200', style: ['normal'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    
    </Head>
    <main className={styles.main} style={mont.style}>
        <h1>Welcome</h1>
        <Paragraph/>
      </main>
      </>
  )
}

function Paragraph() {
  return (
    <p>this is a paragraph</p>
  )
}