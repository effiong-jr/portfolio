import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="text-md">
        <p className=" leading-loose">
          I am an experienced frontend developer with a degree in Social Work. I
          enjoy engineering my applications to follow a storyline to keep the
          user engaged and provide a better user experience, using tools like
          React.js and Redux.js. In my free time, I devote myself to training; I
          read tech blogs, articles and take many online courses to sustain my
          growth mindset and to become a better software engineer overall.
        </p>

        <p className="mt-7 text-sm text-gray-300">
          <span className="font-bold text-md underline">Interest:</span>{' '}
          Blockchain | Solidity | Web3.
        </p>

        <div className="mt-10">
          <h3 className="font-semibold text-lg underline mb-1">
            Tools & Skills
          </h3>
          <ul className="text-sm pl-7 list-disc">
            <li className="mb-2">React / Next.js</li>
            <li className="mb-2">Redux / Redux-toolkit</li>
            <li className="mb-2">Bootstrap</li>
            <li className="mb-2">TailwindCSS</li>
            <li className="mb-2">API integration</li>
            <li className="mb-2">Knowledge of NodeJs/Express</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
