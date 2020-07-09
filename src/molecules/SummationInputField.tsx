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

type Algebra = 'n' | 'k' | 'a'

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

export function CalcSummation(n: number, k: number, a: number): number {
  let sum = 0
  for (let step = k; step <= n; step += 1) {
    sum += a * step
  }
  return sum
}

export default function SummationInputField(props: Props): React.ReactElement {
  const classes = useStyles()
  const { n, k, a, setN, setK, setA, setAnswer } = props

  const setNewValue = (value: number, algebra: Algebra) => {
    switch (algebra) {
      case 'n':
        setN(value)
        setAnswer(CalcSummation(value, k, a))
        break
      case 'k':
        setK(value)
        setAnswer(CalcSummation(n, value, a))
        break
      case 'a':
        setA(value)
        setAnswer(CalcSummation(n, k, value))
        break
      default:
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(Number(event.target.value), event.target.id as Algebra)
  }

  return (
    <div className={classes.container}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">n=</InputAdornment>,
        }}
        id="n"
        value={n}
        onChange={handleChange}
        className={classes.textField}
        type="number"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">k=</InputAdornment>,
        }}
        id="k"
        value={k}
        onChange={handleChange}
        className={classes.textField}
        type="number"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">a=</InputAdornment>,
        }}
        id="a"
        value={a}
        onChange={handleChange}
        className={classes.textField}
        type="number"
      />
    </div>
  )
}
