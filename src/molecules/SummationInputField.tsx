import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core'

export type Props = {
  n: number
  k: number
  setNewSummation: (newN: number, newK: number) => void
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
  const { n, k, setNewSummation } = props

  const handleChange = () => {
    const inputN = document.getElementById('n') as HTMLInputElement
    const inputK = document.getElementById('k') as HTMLInputElement
    inputN.value = String(Number(inputN.value))
    inputK.value = String(Number(inputK.value))
    setNewSummation(Number(inputN.value), Number(inputK.value))
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
    </div>
  )
}
