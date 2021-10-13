import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const index = () => {
  return (
    <>
      <Head>
        <title>Stonk go | UP</title>
        <meta name='keywords' content='stocks' />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi porro, debitis laudantium
          odit sunt voluptates deserunt. Hic culpa officiis fugit sapiente laudantium numquam
          adipisci asperiores incidunt, quaerat, minima in provident.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi porro, debitis laudantium
          odit sunt voluptates deserunt. Hic culpa officiis fugit sapiente laudantium numquam
          adipisci asperiores incidunt, quaerat, minima in provident.
        </p>
        <Link href='/stonks'>
          <a className={styles.btn}>Yay all stonks</a>
        </Link>
      </div>
    </>
  )
}

export default index
