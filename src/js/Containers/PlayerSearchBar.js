import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchPlayers } from '../Actions/index';
import axios from 'axios';

class PlayerSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { player: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);    
  }

  onInputChange(event) {
    this.setState({ player: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    const url = `/search_players?searchTerm=${ this.state.player }`;
    axios.get(url)
    .then(response => {
      console.log("Response: ", response);
      this.props.searchPlayers(response);
    })
    .catch(error => {
      console.log('Error searching players:', error);
    });

    this.setState({ player: '' });
  }

  render() {
    return(
      <form className="input-group" onSubmit={ this.onFormSubmit }>
        <input
          placeholder="Search for a player"
          className="form-input"
          value={this.state.player}
          onChange={this.onInputChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ searchPlayers }, dispatch);
}

export default connect(null, mapStateToProps)(PlayerSearchBar);