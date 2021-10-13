import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Oops..</h1>
      <h2>Cannot be found mate.</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
