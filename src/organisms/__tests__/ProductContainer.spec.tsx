import React from 'react'
import renderer from 'react-test-renderer'
import ProductContainer from '../ProductContainer'

test('Product Snapshot Test', () => {
  const tree = renderer.create(<ProductContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
