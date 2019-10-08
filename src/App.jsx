import React from 'react'
import MovieList from 'components/MovieList'
import './App.scss'
import { connect } from 'react-redux'
import { fetchMovies } from 'actions/movies'
import Sort from 'components/Sort'
import Filter from 'components/Filter'
import MovieDescription from 'components/MovieDescription'

class App extends React.Component {
  componentDidMount = () => this.props.fetchMovies()

  render = () => (
    <div className="App">
      <header>
        <Sort />
        <Filter />
      </header>
      <main>
        <MovieList />
        <MovieDescription />
      </main>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
})

export default connect(
  null,
  mapDispatchToProps
)(App)
