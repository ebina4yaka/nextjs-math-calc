import React from 'react'
import renderer from 'react-test-renderer'
import Sigma from '../Sigma'

test('Sigma', () => {
  const tree = renderer.create(<Sigma />).toJSON()
  expect(tree).toMatchSnapshot()
})
