import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=bb5d8826`)
            .then(res => res.json())
            .then(data => {
                this.props.clicker(data.Search);
            });
    }


    render() {
        const { searchLine } = this.state;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search movie by title
                        <input
                            type="text"
                            className="search-box__form-input"
                            placeholder="For example, Captain America"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;