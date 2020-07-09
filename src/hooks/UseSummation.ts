import { useState } from 'react'

export type Hooks = {
  n: number
  k: number
  a: number
  answer: number
  setNewSummation: (value: number, algebra: Algebra) => void
}

export type Algebra = 'n' | 'k' | 'a'

function CalcSummation(n: number, k: number, a: number): number {
  let sum = 0
  for (let step = k; step <= n; step += 1) {
    sum += a * step
  }
  return sum
}

export default function UseSummation(): Hooks {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [a, setA] = useState(1)
  const [answer, setAnswer] = useState(CalcSummation(n, k, a))
  const setNewSummation = (value: number, algebra: Algebra) => {
    // eslint-disable-next-line default-case
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
    }
  }
  return { n, k, a, answer, setNewSummation }
}
