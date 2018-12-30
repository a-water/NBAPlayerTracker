import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerResult extends Component {
  render() {
    return (
      <div>
        Results: { this.props.player }
      </div>
    )
  }
}

function mapStateToProps({ player }) {
  return { player };
}

export default connect(mapStateToProps)(PlayerResult);