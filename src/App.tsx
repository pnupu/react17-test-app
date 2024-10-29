import React, { Component } from 'react';
import LegacyCounter from './components/LegacyCounter';
import AsyncStateUpdates from './components/AsyncStateUpdates';
import DataFetcher from './components/DataFetcher';
import PortalComponent from './components/PortalComponent';
import EventPoolingExample from './components/EventPoolingExample';
import BatchingExample from './components/BatchingExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React 17 Test App</h1>
        <LegacyCounter />
        <AsyncStateUpdates />
        <DataFetcher />
        <PortalComponent />
        <EventPoolingExample />
        <BatchingExample />
      </div>
    );
  }
}

export default App;