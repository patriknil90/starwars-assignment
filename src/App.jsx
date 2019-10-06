import React from 'react'
import MovieList from 'components/MovieList'
import './App.scss'
import { connect } from 'react-redux'
import fetchMovies from 'actions/movies'
import Sort from 'components/Sort'
import Filter from 'components/Filter'

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
        <section className="MovieDescription">Movie Description</section>
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
