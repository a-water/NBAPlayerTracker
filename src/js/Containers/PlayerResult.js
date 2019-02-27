import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerData from '../PlayerData';


class PlayerResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalHidden: true
    }

    this.NO_PLAYER_FOUND = "No player found";
  }

  renderPlayerInfo(playerResult) {
    let player = new PlayerData(playerResult.playerName, playerResult.pts, playerResult.ast, playerResult.reb);
    return(
      <div className="player-results">
        <div className="player-highlights">
          <p className="player-name">{ player.name }</p>
          <p className="label">Points Per Game</p>
          <p className="player-stat">{ player.ppg }</p>
          <p className="label">Assists Per Game</p>
          <p className="player-stat">{ player.apg }</p>
          <p className="label">Rebounds Per Game</p>
          <p className="player-stat">{ player.rpg }</p>
        </div>
        <div className={`no-player-found-modal ${this.props.player.length > 0 && this.props.player[0] === this.NO_PLAYER_FOUND ? "" : "modal-hidden"}`}>
          <p>No player found</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { !this.props.player || this.props.player.length === 0 || this.props.player[0] === this.NO_PLAYER_FOUND ?  
            this.renderPlayerInfo({
                playerName: "",
                pts: "---",
                ast: "---",
                reb: "---"
              })
          :
            this.renderPlayerInfo(this.props.player[0].playerHeadlineStats[0])
        }
      </div>
    )
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(mapStateToProps)(PlayerResult);