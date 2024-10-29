import React, { Component } from 'react';

interface State {
  data: string | null;
  loading: boolean;
}

class DataFetcher extends Component<{}, State> {
  state = {
    data: null,
    loading: true
  };

  // This will cause issues in React 18 Strict Mode
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    setTimeout(() => {
      this.setState({
        data: 'Data loaded',
        loading: false
      });
    }, 1000);
  };

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        <h2>Data Fetcher</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>{data}</p>
        )}
      </div>
    );
  }
}

export default DataFetcher;