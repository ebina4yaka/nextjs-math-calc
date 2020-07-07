import { CalcSigma } from '../SigmaInputField'

describe('SigmaInputField.tsx Functions TestCases', () => {
  it('should return the CalcSigma value', () => {
    const result = CalcSigma(10, 1, 1)
    const expected = 55

    expect(result).toStrictEqual(expected)
  })
})
