import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stevie's Portfolio</title>
        <meta name="description" content="Written with <3 by SWMCC" />
      </Head>

      <h1 className='p-10 text-red-500'>My new Portfolio Site</h1>
    </div>
  )
}
