import { BsTools } from 'react-icons/bs'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="text-md">
        <p className="leading-loose">
          I am a frontend software developer with the skills and focus to build
          exceptional digital products, which satisfies business requirements
          while following best practices and industry standards, with modern
          user interfaces.
        </p>

        <p className="mt-4 leading-loose">
          In my free time, I devote myself to training; I read tech blogs,
          articles and take online courses to expand my knowledge and experience
          and to become a better software engineer overall.
        </p>

        <p className="mt-7 text-sm text-gray-300">
          <span className="font-bold text-md underline">Interest:</span>{' '}
          Blockchain | Solidity | Web3.
        </p>

        <div className="mt-10">
          <h3 className="flex content-center font-semibold text-lg underline mb-1">
            <span className="mt-1 mr-2 text-gray-500">
              <BsTools />
            </span>{' '}
            <span>
              Tools <span className="text-yellow-600 text-sm">&</span> Skills
            </span>
          </h3>
          <ul className="text-sm pl-7 list-disc">
            <li className="mb-2">React / Next.js</li>
            <li className="mb-2">Redux / Redux-toolkit / Redux-saga</li>
            <li className="mb-2">
              Bootstrap / Styled Components / TailwindCSS
            </li>
            <li className="mb-2">REST API integration</li>
            <li className="mb-2">Knowledge of NodeJs/Express</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
