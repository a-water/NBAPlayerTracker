import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerData from '../PlayerData';


class PlayerResult extends Component {

  renderPlayerInfo(playerResult) {
    let player = new PlayerData(playerResult.playerName, playerResult.pts, playerResult.ast, playerResult.reb);
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
    );
  }

  render() {    
    return (
      <div>
        { this.props.player[0] ? 
            this.renderPlayerInfo(this.props.player[0].playerHeadlineStats[0]) 
          :  
            this.renderPlayerInfo({
                playerName: "",
                pts: "---",
                ast: "---",
                reb: "---"
              }
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(mapStateToProps)(PlayerResult);