import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = e => {
        this.setState({ term: e.target.value});
    }

    onFormSubmit = e => {
        e.preventDefault();

        // get weather data
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get 5 day forecast for cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}