import { CalcSummation } from '../SummationInputField'

describe('SummationInputField.tsx Functions TestCases', () => {
  it('should return the CalcSigma value', () => {
    const result = CalcSummation(10, 1, 1)
    const expected = 55

    expect(result).toStrictEqual(expected)
  })
})
