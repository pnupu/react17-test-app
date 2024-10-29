import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface State {
  showPortal: boolean;
}

class PortalComponent extends Component<{}, State> {
    el: HTMLDivElement;
    containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = { showPortal: false };
    // Create portal container
    this.el = document.createElement('div');
    // Using string ref (will break in React 18)
    this.containerRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    // Using findDOMNode (deprecated and will warn in React 18)
    const node = ReactDOM.findDOMNode(this);
    console.log('Found node:', node);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
    // Using unmountComponentAtNode (changed in React 18)
    ReactDOM.unmountComponentAtNode(this.el);
  }

  togglePortal = () => {
    this.setState(state => ({ showPortal: !state.showPortal }));
  };

  render() {
    return (
      <div>
        <button onClick={this.togglePortal}>Toggle Portal</button>
        <div ref="legacyStringRef">Using string ref</div>
        {this.state.showPortal && ReactDOM.createPortal(
          <div className="portal">
            Portal Content
            <button onClick={this.togglePortal}>Close Portal</button>
          </div>,
          this.el
        )}
      </div>
    );
  }
}

export default PortalComponent;