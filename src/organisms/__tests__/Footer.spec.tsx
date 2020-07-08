import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

test('Footer', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})