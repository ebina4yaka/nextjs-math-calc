import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import SummationInputField from '../SummationInputField'
import useSummation from '../../hooks/useSummation'

describe('SummationInputField Tests', () => {
  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => useSummation())
    const container = render(
      <SummationInputField
        n={result.current.n}
        k={result.current.k}
        setNewSummation={result.current.setNewSummation}
      />
    )
    const inputN = container.getByPlaceholderText('input-n') as HTMLInputElement
    const inputK = container.getByPlaceholderText('input-k') as HTMLInputElement
    const newN = 20
    const newK = 10
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
