import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {
    darkModeContext,
    DarkModeState,
} from './components/UI/themeHandler';
import Layout from './components/UI/layout';

// components
import Home from './pages/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './components/movieDetails';
import Menu from './components/menu';
import Search from './components/search';
import Btn from './components/button';

//styles
import './App.css';
import { Main } from './common/styles';

//pages
import SignUp from './pages/auth/signUp';

const App = () => {
    return (
        <DarkModeState>
            <Layout>
                <Router>
                    <Menu fixed />
                    <Main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/movies"
                                component={MovieList}
                            />
                            <Route
                                path="/movies/:movieId"
                                component={MovieDetails}
                            />
                            <Route
                                exact
                                path="/featured"
                                component={MovieList}
                            />
                            <Route
                                exact
                                path="/search"
                                component={Search}
                            />
                            <Route
                                exact
                                path="/join"
                                component={SignUp}
                            />
                        </Switch>
                    </Main>
                </Router>
            </Layout>
        </DarkModeState>
    );
};

export default App;
