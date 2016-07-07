import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <h4>Author: {this.props.params.userName}</h4>

      </div>
    )
  }
})
