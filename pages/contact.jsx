import { FiMail } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="pl-10 w-max">
        <div>
          <a
            href="mailto:f.young.de@gmail.com"
            target="_blank"
            className="flex items-center hover:text-blue-500 transition duration-300"
          >
            {" "}
            <FiMail /> <span className="ml-2">f.young.de@gmail.com</span>
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/effiong-bassey/"
            target="_blank"
            className="flex items-center hover:text-blue-500 transition duration-300 mt-4"
          >
            {" "}
            <FaLinkedin /> <span className="ml-2">Effiong Bassey</span>
          </a>
        </div>
        {/* <div>
          <a
            href="https://twitter.com/fyoung_jr"
            target="_blank"
            className="flex items-center hover:text-blue-500 transition duration-300 mt-4"
          >
            {' '}
            <FaTwitter /> <span className="ml-2">@fyoung_jr</span>
          </a>
        </div> */}

        <div>
          <a
            href="https://github.com/effiong-jr"
            target="_blank"
            className="flex items-center hover:text-blue-500 transition duration-300 mt-4"
          >
            {" "}
            <FaGithub /> <span className="ml-2">effiong-jr</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
