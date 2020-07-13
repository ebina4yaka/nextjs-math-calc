import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import ProductInputField from '../ProductInputField'
import useProduct from '../../hooks/useProduct'

describe('ProductInputField Tests', () => {
  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => useProduct())
    const container = render(
      <ProductInputField
        n={result.current.n}
        k={result.current.k}
        setNewProduct={result.current.setNewProduct}
      />
    )
    const inputN = container.getByPlaceholderText('input-n') as HTMLInputElement
    const inputK = container.getByPlaceholderText('input-k') as HTMLInputElement
    const newN = 50
    const newK = 20
    act(() => {
      fireEvent.change(inputN, { target: { value: newN } })
    })
    expect(result.current.n).toBe(newN)
    act(() => {
      fireEvent.change(inputK, { target: { value: newK } })
    })
    expect(result.current.k).toBe(newK)
  })
})
