import React from 'react'
import { mount } from 'enzyme'
import moviesMock from 'movieMocks'
import Root from 'root'
import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SORT_VALUES } from 'utils/constants'
import App from '../App'

const mockStore = configureMockStore([thunk])({})

describe('<App />', () => {
  // Helper function
  const renderedMoviesMatchExpected = (wrapper, expectedMoviesList) => {
    const movieList = wrapper.find('#MovieList')
    expect(movieList.find('li')).toHaveLength(moviesMock.length)

    movieList.find('li').forEach((listItem, index) => {
      expect(
        listItem
          .find('.MovieItem_title')
          .render()
          .text()
      ).toBe(expectedMoviesList[index].fields.title)
    })
  }

  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <Root store={mockStore}>
        <App />
      </Root>
    )

    const responseObj = { status: 200, data: moviesMock }
    mockAxios.mockResponse(responseObj)
  })

  it('displays a list of movies', () => {
    wrapper.update()

    renderedMoviesMatchExpected(wrapper, moviesMock)
  })

  const sortSelect = () => wrapper.find('#Sort_select')
  const filterInput = () => wrapper.find('#Filter_input')

  it('sorts movies', () => {
    wrapper.update()

    // By episode number
    sortSelect().simulate('change', { target: { value: SORT_VALUES.EPISODE } })
    let sortedMovies = moviesMock.sort(
      (movie1, movie2) =>
        movie1.fields[SORT_VALUES.EPISODE] - movie2.fields[SORT_VALUES.EPISODE]
    )
    renderedMoviesMatchExpected(wrapper, sortedMovies)

    // By year
    sortSelect().simulate('change', { target: { value: SORT_VALUES.YEAR } })
    sortedMovies = moviesMock.sort(
      (movie1, movie2) =>
        movie1.fields[SORT_VALUES.YEAR] - movie2.fields[SORT_VALUES.YEAR]
    )
    renderedMoviesMatchExpected(wrapper, sortedMovies)
  })

  it('filters movies', () => {
    wrapper.update()

    filterInput().simulate('change', {
      target: { value: 'The Rise of Skywalker' },
    })
    renderedMoviesMatchExpected(wrapper, [])

    const expectedMovies = [moviesMock[2], moviesMock[4], moviesMock[5]]
    filterInput().simulate('change', {
      target: { value: 'of the' },
    })
    renderedMoviesMatchExpected(wrapper, expectedMovies)
  })

  it('sorts filtered movies', () => {
    sortSelect().simulate('change', { target: { value: SORT_VALUES.EPISODE } })
    filterInput().simulate('change', {
      target: { value: 'of the' },
    })

    const expectedMovies = [moviesMock[2], moviesMock[4], moviesMock[5]].sort(
      (movie1, movie2) =>
        movie1.fields[SORT_VALUES.EPISODE] - movie2.fields[SORT_VALUES.EPISODE]
    )
    renderedMoviesMatchExpected(wrapper, expectedMovies)
  })
})
