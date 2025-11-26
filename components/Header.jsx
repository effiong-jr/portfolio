import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="relative h-28 overflow-hidden bg-gray-900">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
        >
          <source src="headerVideo.webm" type="video/webm" />
        </video>
      </div>

      <div className="flex justify-between pr-3 relative mb-2">
        <div className="-mt-10 w-max  px-3 ">
          <div className=" rounded-full h-20 w-20 border-2 border-gray-800 border-solid overflow-hidden">
            <Image
              src={`/profilePhoto.jpg`}
              height={80}
              width={80}
              className="max-w-full object-cover"
              alt="profile image"
            />
          </div>
          <div className="font-bold">Bassey Effiong</div>
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
            #ReactJs | #NextJs | #TypeScript | #Tailwindcss
          </span>
        </p>
        <div className="flex justify-left items-center">
          <div className="flex items-center text-xs mt-2 mr-3">
            <GoLocation /> <span className="ml-1">Lagos, Nigeria</span>
          </div>
          <div className="flex items-center text-xs mt-2">
            {" "}
            <FiClock /> <span className="ml-1">5+ yrs. experience</span>
          </div>
        </div>
      </div>

      {/* <div>
        <div>223 Following</div>
        <div>455 Followers</div>
      </div> */}
    </div>
  );
};

export default Header;
