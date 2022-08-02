import Head from 'next/head'
import styles from '../styles/app.module.scss'
import Main from './main.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JETA</title>
        <meta name="JETA" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
    </div>
  )
}
