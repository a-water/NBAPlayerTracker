import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchPlayers } from '../Actions/index';
import axios from 'axios';

class PlayerSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      player: '',
      displayErrors: false 
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);    
  }

  onInputChange(event) {
    const nameRegex = RegExp(/^[a-z ,.'-]+$/i);
    if(nameRegex.test(event.target.value) || event.target.value === ''){
      this.setState({ player: event.target.value });
    }
  }

  onFormSubmit(event) {
    event.preventDefault();

    if(!event.target.checkValidity()) {
      this.setState ({ displayErrors: true });
      return;
    }
    
    event.target.blur();

    const url = `/search_players?searchTerm=${ this.state.player }`;
    axios.get(url)
    .then(response => {
      console.log("Response: ", response);
      this.props.searchPlayers(response);
    })
    .catch(error => {
      console.log('Error searching players:', error);
    });

    this.setState({
      player: '', 
      displayErrors: false
    });
  }

  render() {
    return(
      <form className="input-group" noValidate onSubmit={ this.onFormSubmit }>
        <input
          placeholder="Search for a player"
          className={`form-input ${this.state.displayErrors ? "displayErrors" : ""}`}
          value={this.state.player}
          onChange={this.onInputChange}
          type="text"
          autoFocus
          required
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