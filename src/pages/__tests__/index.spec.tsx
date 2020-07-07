import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../index'

test('Index', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
