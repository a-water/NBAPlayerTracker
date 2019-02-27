import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerData from '../PlayerData';


class PlayerResult extends Component {

  renderPlayerInfo(playerResult) {
    const playerStats = playerResult.playerHeadlineStats[0];    
    let player = new PlayerData(playerStats.playerName, playerStats.pts, playerStats.ast, playerStats.reb);
    return(
      <div className="player-highlights">
        <p className="player-name">{ player.name }</p>
        <p className="label">Points Per Game</p>
        <p className="player-stat">{ player.ppg }</p>
        <p className="label">Assists Per Game</p>
        <p className="player-stat">{ player.apg }</p>
        <p className="label">Rebounds Per Game</p>
        <p className="player-stat">{ player.rpg }</p>
      </div>
    )
  }

  render() {    
    return (
      <div>
        { this.props.player[0] ? this.renderPlayerInfo(this.props.player[0]) : "" }
      </div>
    )
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(mapStateToProps)(PlayerResult);