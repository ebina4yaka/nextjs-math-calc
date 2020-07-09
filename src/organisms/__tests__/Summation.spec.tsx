import React from 'react'
import renderer from 'react-test-renderer'
import Summation from '../Summation'

describe('Summation Tests', () => {
  test('Snapshot Test', () => {
    const tree = renderer.create(<Summation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
