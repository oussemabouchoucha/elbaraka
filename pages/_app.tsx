import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/default'
import { ChakraProvider,  } from '@chakra-ui/react'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode, useState } from 'react'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout ) {
  const getLayout = Component.getLayout ?? ((page) => page)

 
       return getLayout(<ChakraProvider><Layout><Component {...pageProps} /></Layout></ChakraProvider> )

    
    
  
};
