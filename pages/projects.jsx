import { BsGithub } from 'react-icons/bs'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout>
      <div className="flex">
        <img
          src="/health-banc.png"
          alt="healthbanc"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">Health Banc</h5>
          <p className="text-sm">
            Healthbanc is a first-class fully integrated digital suite of health
            solutions created to provide cutting-edge healthcare services to
            everyone across the health value-chain in Nigeria.
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://healthbanc.ng"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img
          src="/dj-events.png"
          alt="djevents"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">DJ Events</h5>
          <p className="text-sm">
            An application built with Next.js and Strapi Content Management
            System that allow signed in user to add events and all users to find
            events (map location included in the details page).
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://dj-events-debull.vercel.app/"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
            <a
              href="https://github.com/effiong-jr/dj-events-frontend"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>view code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img
          src="/wave-portal.png"
          alt="djevents"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">Wave Portal</h5>
          <p className="text-sm">
            An application built with Next.js and solidity that connects to the
            user's ethereum wallet to send waves, and stand a chance to win some
            ether. Deployed to the rinkeby testnet
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://wave-portal-frontend-wine.vercel.app/"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-3 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
            <a
              href="https://github.com/effiong-jr/wave-portal-frontend"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-3 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>react</button>
            </a>

            <a
              href="https://github.com/effiong-jr/waveContract"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-3 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>solidity</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img
          src="/hacker-news.png"
          alt="hackerNews"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">Hacker News</h5>
          <p className="text-sm">
            A react application that uses the hacker news API to fetch content
            based on the current user's search input text
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://effiong-hackernews-app.netlify.app/"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
            <a
              href="https://github.com/effiong-jr/hackernews_app"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>view code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img
          src="/natours-img.png"
          alt="natours"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">Natours</h5>
          <p className="text-sm">
            A demo website built with HTML and CSS/SCSS for nature tourism.
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://natours-project-demo.netlify.app/"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
            <a
              href="https://github.com/effiong-jr/Natours-project"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>view code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <img
          src="/dev-space-blog.png"
          alt="devSpaceBlog"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">
            DevSpace Blog
          </h5>
          <p className="text-sm">
            An blog application built with Next.js demonstrating client site
            routing.
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://dev-space-blog-debull.vercel.app/blog"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
            </a>
            <a
              href="https://github.com/effiong-jr/DevSpace-blog"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>view code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/effiong-jr"
          className="flex items-center justify-center mx-auto w-32 text-sm text-gray-500 hover:text-blue-300 transition duration-300"
        >
          <span className="mr-1">...</span>
          <BsGithub /> <span className="ml-1">my github</span>
        </a>
      </div>
    </Layout>
  )
}

export default Projects
