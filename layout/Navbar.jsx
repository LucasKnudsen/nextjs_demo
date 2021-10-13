import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' alt='some text' height={75} width={75} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/stonks'>
        <a>Stonks</a>
      </Link>
    </nav>
  )
}

export default Navbar
