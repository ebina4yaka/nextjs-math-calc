/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { useMediaQuery } from '@material-ui/core'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const useStyles = makeStyles({
  component: {
    textAlign: 'center',
  },
})

export default function MyApp(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

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
        <title>MathCalc</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <Header title="MathCalc" />
        </header>
        <Container maxWidth="lg">
          <Box my={4} className={classes.component}>
            <Component {...pageProps} />
          </Box>
        </Container>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  )
}
