import React from 'react'
import { mount } from 'enzyme'
import moviesMock from 'movieMocks'
import Root from 'root'
import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from '../App'

const mockStore = configureMockStore([thunk])({})

describe('<App />', () => {
  it('displays a list of movies', () => {
    const wrapper = mount(
      <Root store={mockStore}>
        <App />
      </Root>
    )

    const responseObj = { status: 200, data: moviesMock }
    mockAxios.mockResponse(responseObj)

    wrapper.update()

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
  })
})
