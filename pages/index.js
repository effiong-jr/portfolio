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

        <p className="mt-10 text-sm text-gray-300">
          <span className="font-bold text-md underline">Interest:</span>{' '}
          Blockchain | Solidity | Web3.
        </p>
      </div>
    </Layout>
  )
}
