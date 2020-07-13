import React from 'react'
import renderer from 'react-test-renderer'
import SummationComponent from '../SummationComponent'

test('Summation Snapshot Test', () => {
  const tree = renderer.create(<SummationComponent />).toJSON()
  expect(tree).toMatchSnapshot()
})
