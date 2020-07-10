import { act, renderHook } from '@testing-library/react-hooks'
import UseSummation from '../UseSummation'

test('Summation Hooks Test', () => {
  const { result } = renderHook(() => UseSummation())
  const newN = 5
  const newK = 3
  const newA = 2
  act(() => {
    result.current.setNewSummation(newN, result.current.k, result.current.a)
  })
  expect(result.current.n).toBe(newN)
  expect(result.current.answer).toBe(15)
  act(() => {
    result.current.setNewSummation(result.current.n, newK, result.current.a)
  })
  expect(result.current.k).toBe(newK)
  expect(result.current.answer).toBe(12)
  act(() => {
    result.current.setNewSummation(result.current.n, result.current.k, newA)
  })
  expect(result.current.a).toBe(newA)
  expect(result.current.answer).toBe(24)

  act(() => {
    result.current.setNewSummation(10, 1, 1)
  })

  expect(result.current.n).toBe(10)
  expect(result.current.k).toBe(1)
  expect(result.current.a).toBe(1)
  expect(result.current.answer).toBe(55)
})
