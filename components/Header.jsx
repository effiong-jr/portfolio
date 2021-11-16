import { GoLocation } from 'react-icons/go'
import { FiClock } from 'react-icons/fi'

const Header = () => {
  return (
    <div>
      <div className="h-28 overflow-hidden bg-gray-900">
        <video muted loop autoPlay className="opacity-10 -mt-20 ">
          <source src="headerVideo.webm" type="video/webm" />
        </video>
      </div>

      <div className="flex justify-between pr-3 relative mb-2">
        <div className="-mt-10 w-max  px-3 ">
          <div className=" rounded-full h-20 w-20 border-2 border-gray-800 border-solid overflow-hidden">
            <img src="profilePhoto.jpg" className="max-w-full object-contain" />
          </div>
          <div className="font-bold">Effiong Bassey</div>
          <div className="-mt-2">
            <a
              href="https://twitter.com/fyoung_de"
              className="text-xs text-gray-300"
            >
              @fyoung_jr
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-center rounded-full border-solid border-2 border-gray-300 h-8 w-max px-5 text-xs mt-2 
            hover:bg-gray-200 hover:text-gray-700 cursor-pointer transition duration-300
        "
        >
          <a href="mailto:f.young.de@gmail.com">Send Mail</a>
        </div>
      </div>

      <div className="px-3">
        <p className="font-semibold text-sm">
          Frontend Software Developer
          <span className="text-xs text-gray-400 block">
            #React | #Redux-toolkit | #Redux-saga | #tailwindcss
          </span>
        </p>
        <div className="flex justify-left items-center">
          <div className="flex items-center text-xs mt-2 mr-3">
            <GoLocation /> <span className="ml-1">Lagos, Nigeria</span>
          </div>
          <div className="flex items-center text-xs mt-2">
            {' '}
            <FiClock /> <span className="ml-1">3+ yrs. experience</span>
          </div>
        </div>
      </div>

      {/* <div>
        <div>223 Following</div>
        <div>455 Followers</div>
      </div> */}
    </div>
  )
}

export default Header
