import { BsGithub } from "react-icons/bs";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="flex">
        <img
          src="/armone.png"
          alt="armone"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-bold text-xl">ARM One</h5>
          <p className="text-sm">
            Unlock the power of diversified investments with the ARM One app.
            Seamlessly manage your money, explore a world of opportunities, and
            watch your wealth grow.
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://armone.arm.com.ng/login"
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
          src="/health-banc.png"
          alt="healthbanc"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-semibold text-lg text-yellow-600">Health Banc</h5>
          <p className="text-sm">
            A one-stop platform for fitness, diagnostics, and healthy meal
            plans, tailored to help you achieve your health goals.
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
          src="/qt-homes.png"
          alt="djevents"
          className=" object-cover h-40 w-32 mr-2 rounded-md"
        />
        <div>
          <h5 className="font-bold text-xl">Quickteller Homes</h5>
          <p className="text-sm">
            Find the perfect space for you. Enjoy flexible payment options. Rent
            | Buy | Shortlet
          </p>
          <div className="inline-block mt-4">
            <a
              href="https://homes.quickteller.com/"
              target="_blank"
              className="text-gray-400 font-semibole text-sm border-b-gray-400 border-b-2 pb-1 mr-4 
              hover:border-b-white hover:text-white transition-all duration-300"
            >
              <button>visit site</button>
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
  );
};

export default Projects;
