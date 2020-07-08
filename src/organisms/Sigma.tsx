import React, { useState } from 'react'
import SigmaFormula from '../molecules/SigmaFormula'
import SigmaInputField, { CalcSigma } from '../molecules/SigmaInputField'

export default function Sigma(): React.ReactElement {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [a, setA] = useState(1)
  const [answer, setAnswer] = useState(CalcSigma(n, k, a))
  return (
    <>
      <SigmaFormula n={n} k={k} a={a} answer={answer} />
      <SigmaInputField
        n={n}
        k={k}
        a={a}
        setN={setN}
        setK={setK}
        setA={setA}
        setAnswer={setAnswer}
      />
    </>
  )
}
