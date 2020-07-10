import { useState } from 'react'

export type Hooks = {
  n: number
  k: number
  a: number
  answer: number
  setNewSummation: (newN: number, newK: number, newA: number) => void
}

function calcSummation(n: number, k: number, a: number): number {
  let sum = 0
  for (let step = k; step <= n; step += 1) {
    sum += a * step
  }
  return sum
}

export default function useSummation(): Hooks {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [a, setA] = useState(1)
  const [answer, setAnswer] = useState(calcSummation(n, k, a))
  const setNewSummation = (newN: number, newK: number, newA: number) => {
    setN(newN)
    setK(newK)
    setA(newA)
    setAnswer(calcSummation(newN, newK, newA))
  }
  return { n, k, a, answer, setNewSummation }
}
