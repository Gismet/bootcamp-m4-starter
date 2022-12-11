import React, { Component } from 'react';
import './Favorites.css';
import store from "../../redux/store";
import { Link } from "react-router-dom";
import { removeItemFromList } from '../../redux/actions';
import { clearList } from '../../redux/actions';


class Favorites extends Component {
    state = {
        title: '',
        movies: [

        ],
        id: '',
        saveButtonDisabled: true,
        linkIsDisabled: true
    }

    handleTitleInput = (e) => {
        this.setState({ title: e.target.value });
    }

    componentDidMount() {
        store.subscribe(() => {
            const localState = store.getState();
            this.setState({ movies: localState.lists });
        })
    }

    // clear up the global state before time component gets unmounted
    componentWillUnmount() {
        console.log("clearing up the list")
        store.dispatch(clearList());
        this.setState({ movies: [] });
        console.log(this.state.movies);
    }


    // dispatch removeItemFromList action creator
    handleRemoveButtonClick = (itemId) => {
        store.dispatch(removeItemFromList(itemId));
        console.log("Remove handler works");
    }


    //Save the list
    handleSaveList = () => {
        const info = {
            "title": this.state.title,
            "movies": this.state.movies
        }
        console.log("Sending POST request");

        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(res => res.json()).then(data => { this.setState({ id: data.id }) });
        this.setState({ linkIsDisabled: false })
    }


    render() {

        return (
            <div className="favorites">
                <input placeholder='Enter list title' className="favorites__name" onChange={this.handleTitleInput} />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li className='listItem' key={item.id}>{item.name} ({item.year}) <button className='removeButton' onClick={() => this.handleRemoveButtonClick(item.id)}>X</button></li>;
                    })}
                </ul>
                {this.state.linkIsDisabled ? <button type="button" className="favorites__save" onClick={this.handleSaveList}>Save list</button> :
                    <Link to={"/list/" + this.state.id}>Go to list</Link>}
            </div>
        );
    }
}

export default Favorites;