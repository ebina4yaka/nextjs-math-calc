import React from 'react'
import renderer from 'react-test-renderer'
import Summation from '../Summation'

test('Summation', () => {
  const tree = renderer.create(<Summation />).toJSON()
  expect(tree).toMatchSnapshot()
})
