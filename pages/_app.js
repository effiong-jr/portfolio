import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Effiong Bassey</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', `${process.env.NEXT_PUBLIC_GA}
          ');
        </script>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
