import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import SummationInputField from '../SummationInputField'
import UseSummation from '../../hooks/UseSummation'

describe('SummationInputField Tests', () => {
  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => UseSummation())
    const container = render(
      <SummationInputField
        n={result.current.n}
        k={result.current.k}
        a={result.current.a}
        setNewSummation={result.current.setNewSummation}
      />
    )
    const inputN = container.getByPlaceholderText('input-n') as HTMLInputElement
    const inputK = container.getByPlaceholderText('input-k') as HTMLInputElement
    const inputA = container.getByPlaceholderText('input-a') as HTMLInputElement
    const newN = 20
    const newK = 10
    const newA = 5
    act(() => {
      fireEvent.change(inputN, { target: { value: newN } })
    })
    expect(result.current.n).toBe(newN)
    act(() => {
      fireEvent.change(inputK, { target: { value: newK } })
    })
    expect(result.current.k).toBe(newK)
    act(() => {
      fireEvent.change(inputA, { target: { value: newA } })
    })
    expect(result.current.a).toBe(newA)
  })
})
