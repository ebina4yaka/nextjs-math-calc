import { useState } from 'react'

export type Hooks = {
  n: number
  k: number
  answer: number
  setNewSummation: (newN: number, newK: number) => void
}

function calcSummation(n: number, k: number): number {
  let sum = 0
  for (let step = k; step <= n; step += 1) {
    sum += step
  }
  return sum
}

export default function useSummation(): Hooks {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [answer, setAnswer] = useState(calcSummation(n, k))
  const setNewSummation = (newN: number, newK: number) => {
    setN(newN)
    setK(newK)
    setAnswer(calcSummation(newN, newK))
  }
  return { n, k, answer, setNewSummation }
}
