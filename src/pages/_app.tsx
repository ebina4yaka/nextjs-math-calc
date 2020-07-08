/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function MyApp(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line no-unused-expressions
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Math Calc</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
