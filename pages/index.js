import { BsTools } from "react-icons/bs";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="text-md">
        <p className="leading-loose">
          I am a frontend software developer dedicated to building exceptional
          digital products that meet business goals while adhering to best
          practices, industry standards, and modern UI principles.
        </p>

        <p className="mt-4 leading-loose">
          In my free time, I continuously improve my craft by reading tech blogs
          and articles, taking online courses, and exploring new technologies to
          deepen my expertise and become a more effective software engineer.
        </p>

        <p className="mt-7 text-sm text-gray-300">
          <span className="font-bold text-md underline">Interest:</span> Golang
          | Blockchain | Web3.
        </p>

        <div className="mt-10">
          <h3 className="flex content-center font-semibold text-lg underline mb-1">
            <span className="mt-1 mr-2 text-gray-500">
              <BsTools />
            </span>{" "}
            <span>
              Tools <span className="text-yellow-600 text-sm">&</span> Skills
            </span>
          </h3>
          <ul className="text-sm pl-7 list-disc">
            <li className="mb-2">JavaScript / TypeScript</li>
            <li className="mb-2">React / Next.js</li>
            <li className="mb-2">Redux / Redux-toolkit / Zod / Zustand</li>
            <li className="mb-2">
              Bootstrap / Styled Components / TailwindCSS
            </li>
            <li className="mb-2">API Integration</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
