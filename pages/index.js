import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Effiong Bassey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-800 min-h-screen w-full sm:w-1/2 lg:w-1/3 mx-auto text-gray-200">
        <Header />
      </main>
    </div>
  )
}
