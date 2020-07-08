import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core'

type Props = {
  n: number
  k: number
  a: number
  setN: React.Dispatch<React.SetStateAction<number>>
  setK: React.Dispatch<React.SetStateAction<number>>
  setA: React.Dispatch<React.SetStateAction<number>>
  setAnswer: React.Dispatch<React.SetStateAction<number>>
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4vh',
    marginBottom: '4vh',
  },
  textField: {
    margin: '1vh',
    width: '14em',
  },
})

export function CalcSigma(n: number, k: number, a: number): number {
  let sum = 0
  for (let step = k; step <= n; step += 1) {
    sum += a * step
  }
  return sum
}

export default function SigmaInputField(props: Props): React.ReactElement {
  const classes = useStyles()
  const { n, k, a, setN, setK, setA, setAnswer } = props

  const nChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newN = Number(event.target.value)
    setN(newN)
    setAnswer(CalcSigma(newN, k, a))
  }

  const kChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newK = Number(event.target.value)
    setK(newK)
    setAnswer(CalcSigma(n, newK, a))
  }

  const aChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newA = Number(event.target.value)
    setA(newA)
    setAnswer(CalcSigma(n, k, newA))
  }

  return (
    <div className={classes.container}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">n=</InputAdornment>,
        }}
        value={n}
        onChange={nChange}
        className={classes.textField}
        type="number"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">k=</InputAdornment>,
        }}
        value={k}
        onChange={kChange}
        className={classes.textField}
        type="number"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">a=</InputAdornment>,
        }}
        value={a}
        onChange={aChange}
        className={classes.textField}
        type="number"
      />
    </div>
  )
}
