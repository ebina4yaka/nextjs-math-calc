import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SigmaFormula from '../molecules/SigmaFormula'
import SigmaInputField, { CalcSigma } from '../molecules/SigmaInputField'

const useStyles = makeStyles({
  textField: {
    marginTop: '4vh',
    marginBottom: '4vh',
  },
})

export default function Sigma(): React.ReactElement {
  const classes = useStyles()
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [a, setA] = useState(1)
  const [answer, setAnswer] = useState(CalcSigma(n, k, a))
  return (
    <>
      <SigmaFormula n={n} k={k} a={a} answer={answer} />
      <div className={classes.textField}>
        <SigmaInputField
          n={n}
          k={k}
          a={a}
          setN={setN}
          setK={setK}
          setA={setA}
          setAnswer={setAnswer}
        />
      </div>
    </>
  )
}
