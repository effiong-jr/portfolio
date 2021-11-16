import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div
      className={`flex w-full overflow-x-auto justify-around mt-5 font-semibold border-solid border-b-2 border-gray-600 text-gray-400 text-sm`}
    >
      <div
        className={`cursor-pointer border-b-2 pb-2.5  ${
          router.route === '/'
            ? 'transition duration-500 ease-in-out border-solid border-blue-500 text-white'
            : 'border-transparent'
        }`}
      >
        <Link href="/">
          <a className="px-3">About me</a>
        </Link>
      </div>

      <div
        className={`cursor-pointer border-b-2 pb-2.5  ${
          router.route === '/projects'
            ? 'transition duration-200 ease-in-out border-solid border-blue-500 text-white'
            : 'border-transparent'
        }`}
      >
        <Link href="/projects">
          <a className="px-3">Projects</a>
        </Link>
      </div>

      <div
        className={`cursor-pointer border-b-2 pb-2.5  ${
          router.route === '/contact'
            ? 'transition duration-200 ease-in-out border-solid border-blue-500 text-white '
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
