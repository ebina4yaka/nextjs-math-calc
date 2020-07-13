import React from 'react'
import renderer from 'react-test-renderer'
import SummationContainer from '../SummationContainer'

test('Summation Snapshot Test', () => {
  const tree = renderer.create(<SummationContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
