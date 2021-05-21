import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  render() {
    return (
      <div>
        <span className="badge badge-primary">{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
