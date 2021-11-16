import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  console.log(router.route)
  return (
    <div
      className={`flex justify-around mt-5 font-semibold border-solid border-b-2 border-gray-600 text-sm`}
    >
      <div
        className={`cursor-pointer border-b-2 pb-1  ${
          router.route === '/'
            ? 'transition-transform border-solid border-blue-700' //'transition duration-200 ease-in-out border-solid border-blue-700 '
            : 'border-transparent'
        }`}
      >
        <Link href="/">
          <a className="px-3">About</a>
        </Link>
      </div>

      <div
        className={`cursor-pointer border-b-2 pb-1  ${
          router.route === '/projects'
            ? 'transition duration-200 ease-in-out border-solid border-blue-700 '
            : 'border-transparent'
        }`}
      >
        <Link href="/projects">
          <a className="px-3">Projects</a>
        </Link>
      </div>

      <div
        className={`cursor-pointer border-b-2 pb-1  ${
          router.route === '/contact'
            ? 'transition duration-200 ease-in-out border-solid border-blue-700 '
            : 'border-transparent'
        }`}
      >
        <Link href="/contact">
          <a className="px-3">Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
