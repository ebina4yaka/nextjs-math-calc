import React from 'react'
import SummationFormula from '../molecules/SummationFormula'
import SummationInputField from '../molecules/SummationInputField'
import UseSummation from '../hooks/UseSummation'

export default function Summation(): React.ReactElement {
  const { n, k, a, answer, setNewSummation } = UseSummation()
  return (
    <>
      <SummationFormula n={n} k={k} a={a} answer={answer} />
      <SummationInputField
        n={n}
        k={k}
        a={a}
        setNewSummation={setNewSummation}
      />
    </>
  )
}