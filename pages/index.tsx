import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '../components/layout/default'
const inter = Inter({ subsets: ['latin'] })
import Homee from './Home'



export default function Home() {
  return (
    <>
      <Head>
        <title>El Baraka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Homee/>
    </>
  )
}
