import React, { useState } from 'react'
import SummationFormula from '../molecules/SummationFormula'
import SummationInputField, {
  CalcSummation,
} from '../molecules/SummationInputField'

export default function Summation(): React.ReactElement {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [a, setA] = useState(1)
  const [answer, setAnswer] = useState(CalcSummation(n, k, a))
  return (
    <>
      <SummationFormula n={n} k={k} a={a} answer={answer} />
      <SummationInputField
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
