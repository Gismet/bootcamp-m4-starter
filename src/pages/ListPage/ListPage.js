import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        listTitle: '',
        movies: [
            // { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }
    // when ListPage is rendered, fetch the data
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        console.log(this.props.match)
        fetch('https://acb-api.algoritmika.org/api/movies/list/' + id.id)
            .then(res => res.json())
            .then(data => { this.setState({ movies: data.movies, listTitle: data.title }) });
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.listTitle}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={"https://www.imdb.com/title/" + item.id} target="_blank" rel="noopener noreferrer">{item.name} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListPage;