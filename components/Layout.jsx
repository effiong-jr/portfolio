import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900">
      <img
        src="/bg-img.jpg"
        alt="background-img"
        className="w-screen h-screen fixed object-cover z-0 opacity-5"
      />
      <div className="bg-gray-800 min-h-screen w-full sm:w-1/2 lg:w-1/3 mx-auto text-gray-50 drop-shadow bg-opacity-80">
        <Header />
        <Navbar />

        <section className="px-5 pt-4 pb-10 text-md">{children}</section>
      </div>
    </div>
  )
}

export default Layout
