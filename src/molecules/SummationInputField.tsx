import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core'
import { Algebra } from '../hooks/UseSummation'

export type Props = {
  n: number
  k: number
  a: number
  setNewSummation: (value: number, algebra: Algebra) => void
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

export default function SummationInputField(props: Props): React.ReactElement {
  const classes = useStyles()
  const { n, k, a, setNewSummation } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSummation(Number(event.target.value), event.target.id as Algebra)
  }

  return (
    <div className={classes.container}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">n=</InputAdornment>,
        }}
        id="n"
        placeholder="input-n"
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
        placeholder="input-k"
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
        placeholder="input-a"
        value={a}
        onChange={handleChange}
        className={classes.textField}
        type="number"
      />
    </div>
  )
}