import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Effiong Bassey</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio website for Effiong Bassey"
        />
        <meta
          name="keywords"
          content="Software Developer, Frontend Developer, Software Engineer, React, NextJs, JavaScript"
        />
        <meta name="auther" content="Effiong Bassey" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5Z0Z6TK123"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-5Z0Z6TK123');
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
