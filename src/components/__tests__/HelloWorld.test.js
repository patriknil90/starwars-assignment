import React from 'react'
import { shallow } from 'enzyme'
import HelloWorld from 'components/HelloWorld'

describe('<HelloWorld />', () => {
  it('displays heading', () => {
    const wrapper = shallow(<HelloWorld />)
    expect(
      wrapper
        .find('h2')
        .render()
        .text()
    ).toBe('Hello World!')
  })
})
