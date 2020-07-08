import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

test('Header', () => {
  const tree = renderer.create(<Header title="MathCalc" />).toJSON()
  expect(tree).toMatchSnapshot()
})
