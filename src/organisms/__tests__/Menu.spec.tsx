import React from 'react'
import renderer from 'react-test-renderer'
import Menu from '../Menu'

test('Menu Snapshot Test', () => {
  const tree = renderer.create(<Menu />).toJSON()
  expect(tree).toMatchSnapshot()
})
