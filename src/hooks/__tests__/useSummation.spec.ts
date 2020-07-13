import { act, renderHook } from '@testing-library/react-hooks'
import useSummation from '../useSummation'

test('Summation Hooks Test', () => {
  const { result } = renderHook(() => useSummation())
  const newN = 5
  const newK = 3
  act(() => {
    result.current.setNewSummation(newN, result.current.k)
  })
  expect(result.current.n).toBe(newN)
  expect(result.current.answer).toBe(15)
  act(() => {
    result.current.setNewSummation(result.current.n, newK)
  })
  expect(result.current.k).toBe(newK)
  expect(result.current.answer).toBe(12)
  act(() => {
    result.current.setNewSummation(result.current.n, result.current.k)
  })
  act(() => {
    result.current.setNewSummation(10, 1)
  })
  expect(result.current.n).toBe(10)
  expect(result.current.k).toBe(1)
  expect(result.current.answer).toBe(55)
})
