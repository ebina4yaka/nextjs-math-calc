import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages'

test('Index', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
