import React, { Component } from 'react';

class EventPoolingExample extends Component {
  handleClick = (e: React.MouseEvent) => {
    // This pattern breaks in React 18 because event pooling was removed
    setTimeout(() => {
      // Accessing event properties asynchronously (worked in React 17 due to event pooling)
      console.log(e.target);
      console.log(e.currentTarget);
      console.log(e.type);
    }, 0);
  };

  render() {
    return (
      <div>
        <h2>Event Pooling Example</h2>
        <button onClick={this.handleClick}>Test Event Pooling</button>
      </div>
    );
  }
}

export default EventPoolingExample;
