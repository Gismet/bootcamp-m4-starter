import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import store from "../../redux/store";


class MainPage extends Component {

    state = {
        movies: [],
        // searchLine: ''
    }

    // componentDidMount() {
    //     fetch('http://www.omdbapi.com/?s=godfather&apikey=bb5d8826')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ movies: data.Search });
    //         });
    // }

    // handleInputChage = e => {
    //     this.setState({ searchLine: e })
    // }

    handleSubmit = e => {
        this.setState({ movies: e });
    }

    onClick = () => {
        console.log(store.getState());
    }

    render() {
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox clicker={this.handleSubmit} />
                        </div>
                        <div className="main-page__movies">
                            <Movies movies={this.state.movies} />
                        </div>

                    </section>
                    <aside className="main-page__favorites">
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }
}

export default MainPage;