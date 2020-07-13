import { act, renderHook } from '@testing-library/react-hooks'
import useProduct from '../useProduct'

test('Product Hooks Test', () => {
  const { result } = renderHook(() => useProduct())
  const newN = 5
  const newK = 3
  act(() => {
    result.current.setNewProduct(newN, result.current.k)
  })
  expect(result.current.n).toBe(newN)
  expect(result.current.answer).toBe(120)
  act(() => {
    result.current.setNewProduct(result.current.n, newK)
  })
  expect(result.current.k).toBe(newK)
  expect(result.current.answer).toBe(60)
  act(() => {
    result.current.setNewProduct(result.current.n, result.current.k)
  })
  act(() => {
    result.current.setNewProduct(10, 1)
  })
  expect(result.current.n).toBe(10)
  expect(result.current.k).toBe(1)
  expect(result.current.answer).toBe(3628800)
})
