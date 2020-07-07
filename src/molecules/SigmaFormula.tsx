import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  n: number
  k: number
  a: number
  answer: number
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1,
  },
  sigma: {
    fontSize: '10em',
  },
  number: {
    fontSize: '3em',
  },
  answer: {
    marginLeft: '2vw',
  },
})

export default function SigmaFormula(props: Props): React.ReactElement {
  const classes = useStyles()
  const { n, k, a, answer } = props
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.number}>{n}</div>
        <div className={classes.sigma}>Σ</div>
        <div className={classes.number}>k = {k}</div>
      </div>
      <div className={classes.number}>{a} * k</div>
      <div className={classes.answer}>
        <div className={classes.number}> = {answer}</div>
      </div>
    </div>
  )
}
