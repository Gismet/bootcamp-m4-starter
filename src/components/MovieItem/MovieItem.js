import React, { Component } from 'react';
import './MovieItem.css';
import store from "../../redux/store";
import addToListAction from '../../redux/actions';

class MovieItem extends Component {


    handleSaveList = (title, year, id) => {
        store.dispatch(addToListAction(title, year, id));
        console.log("handle Save list works")
    }

    render() {
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={this.props.Poster} alt={this.props.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{this.props.Title}&nbsp;({this.props.Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.handleSaveList(this.props.Title, this.props.Year, this.props.imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}

export default MovieItem;