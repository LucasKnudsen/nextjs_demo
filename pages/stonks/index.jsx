import Link from 'next/link'
import styles from '../../styles/Stonks.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      accounts: data,
    },
  }
}

const Stonks = ({ accounts }) => {
  return (
    <div>
      <h1>All stonks</h1>
      {accounts.map((user) => {
        return (
          <Link href={`/stonks/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Stonks
