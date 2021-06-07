import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// components
import Home from './pages/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './components/movieDetails';
import Menu from './components/menu';
import Search from './components/search'

//styles
import './App.css';
import { Main } from './common/styles';

class App extends Component {

  render() {

    return (
      <Router>
        <Menu fixed />
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={MovieList} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/featured" component={MovieList} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Main>
      </Router>
    )

  }
}

export default App;
