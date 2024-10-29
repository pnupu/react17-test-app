// src/components/LegacyCounter.tsx
import React, { Component } from 'react';

interface State {
  count: number;
}

class LegacyCounter extends Component<{}, State> {
  state = { count: 0 };

  // Using deprecated lifecycle method
  UNSAFE_componentWillMount() {
    console.log('Component will mount');
  }

  UNSAFE_componentWillReceiveProps(nextProps: {}) {
    console.log('Receiving new props', nextProps);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Legacy Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LegacyCounter;