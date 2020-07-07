import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../organisms/Header'
import Sigma from '../organisms/Sigma'
import Footer from '../organisms/Footer'

const useStyles = makeStyles({
  content: {
    textAlign: 'center',
  },
})

export default function Index(): React.ReactElement {
  const classes = useStyles()
  return (
    <>
      <Header title="CalcSigma" />
      <Container maxWidth="sm">
        <Box my={4}>
          <div className={classes.content}>
            <Sigma />
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
