import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return <>
    <Head>
      <title>This is First-Post</title>
      <link ref="icon" href="/favicon.icon" />
    </Head>
    <h1>first post</h1>
    <Link href="/">Home</Link>
    <div className="wrapper">
      Index
    </div>
    <Layout>
      你好
    </Layout>
    <img src="/static/share1.png"/>
    <Image src="/static/share1.png" width={100} height={100} />
    <style jsx>{`
      .wrapper {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
      }
    `}</style>
  </>
}
