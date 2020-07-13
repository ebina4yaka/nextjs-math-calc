import React from 'react'
import SummationFormula from '../molecules/SummationFormula'
import SummationInputField from '../molecules/SummationInputField'
import useSummation from '../hooks/useSummation'
import BackButton from '../atoms/BackButton'

export default function SummationContainer(): React.ReactElement {
  const { n, k, answer, setNewSummation } = useSummation()
  return (
    <>
      <SummationFormula n={n} k={k} answer={answer} />
      <SummationInputField n={n} k={k} setNewSummation={setNewSummation} />
      <BackButton />
    </>
  )
}
