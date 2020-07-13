import React from 'react'
import renderer from 'react-test-renderer'
import ContentList from '../ContentList'

test('Summation Snapshot Test', () => {
  const tree = renderer.create(<ContentList />).toJSON()
  expect(tree).toMatchSnapshot()
})
