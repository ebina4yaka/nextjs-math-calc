import { useState } from 'react'

export type Hooks = {
  n: number
  k: number
  answer: number
  setNewProduct: (newN: number, newK: number) => void
}

function calcProduct(n: number, k: number): number {
  let prod = 1
  for (let step = k; step <= n; step += 1) {
    prod *= step
  }
  return prod
}

export default function useProduct(): Hooks {
  const [n, setN] = useState(10)
  const [k, setK] = useState(1)
  const [answer, setAnswer] = useState(calcProduct(n, k))
  const setNewProduct = (newN: number, newK: number) => {
    setN(newN)
    setK(newK)
    setAnswer(calcProduct(newN, newK))
  }
  return { n, k, answer, setNewProduct }
}
