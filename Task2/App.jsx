import React, { Component } from 'react';

class CounterComponent extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Task 2 Counter Component</h1>
        <p>Current count : {count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
