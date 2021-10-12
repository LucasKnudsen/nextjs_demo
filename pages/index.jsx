import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi porro, debitis laudantium
        odit sunt voluptates deserunt. Hic culpa officiis fugit sapiente laudantium numquam adipisci
        asperiores incidunt, quaerat, minima in provident.
      </p>
      <Link href='/stonks'>
        <a>Yay all stonks</a>
      </Link>
    </div>
  )
}

export default index
