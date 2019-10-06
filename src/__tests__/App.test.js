import React from 'react'
import { mount } from 'enzyme'
import moviesMock from 'movieMocks'
import Root from 'root'
import App from '../App'

describe('<App />', () => {
  it('displays a list of movies', () => {
    const wrapper = mount(
      <Root>
        <App />
      </Root>
    )
    const movieList = wrapper.find('ul')
    expect(movieList.find('li')).toHaveLength(moviesMock.length)

    movieList.find('li').forEach((listItem, index) => {
      expect(
        listItem
          .find('.MovieItem_title')
          .render()
          .text()
      ).toBe(moviesMock[index].fields.title)
    })

    wrapper.unmount()
  })
})
