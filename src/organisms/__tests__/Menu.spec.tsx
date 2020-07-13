import React from 'react'
import renderer from 'react-test-renderer'
import { act } from '@testing-library/react-hooks'
import Menu from '../Menu'

test('Menu Snapshot Test', () => {
  act(() => {
    const tree = renderer.create(<Menu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
