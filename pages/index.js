import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Effiong Bassey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <h1>Body</h1>
        </Layout>
      </main>
    </div>
  )
}
