import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800 min-h-screen w-full sm:w-1/2 lg:w-1/3 mx-auto text-gray-200">
      <Header />
      <Navbar />

      <section className="px-5 pt-4 pb-10 text-md">{children}</section>
    </div>
  )
}

export default Layout
