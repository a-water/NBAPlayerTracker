import React, { Component } from 'react';
import PlayerSearchBar from '../Containers/PlayerSearchBar';
import PlayerResult from '../Containers/PlayerResult';

export default class App extends Component {
    render() {
      return (
        <div className="parent">
          <PlayerSearchBar />
          <PlayerResult />
        </div>
      );
    }
}