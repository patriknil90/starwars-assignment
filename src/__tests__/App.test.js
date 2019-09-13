import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  it('displays heading', () => {
    const wrapper = shallow(<App />)
    expect(
      wrapper
        .find('h1')
        .render()
        .text()
    ).toBe('Minimal React Starter Kit')
  })
})
