import React from 'react'
import MovieList from 'components/MovieList'
import './App.scss'

const App = () => (
  <div className="App">
    <header>Header</header>
    <main>
      <MovieList />
      <section className="MovieDescription">Movie Description</section>
    </main>
  </div>
)

export default App
