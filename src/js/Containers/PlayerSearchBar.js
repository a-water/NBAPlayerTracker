import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findPlayer } from '../Actions/index';

class PlayerSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { player: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);    
  }

  onInputChange(event) {
    // console.log("Player: " + event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted!");

    this.props.findPlayer(this.state.player);
    this.setState({ player: '' });
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search for a player"
          className="form-input"
          onChange={this.onInputChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    );
  }
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ findPlayer }, dispatch);
}

export default connect(null, mapStateToProps)(PlayerSearchBar);