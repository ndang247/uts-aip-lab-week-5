import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };

    this.count = this.count.bind(this);
  }

  async componentDidMount() {
    let result = await fetch('/api/count');
    let json = await result.json();
    this.setState({ count: json.count});
  }

  async count() {
    let result = await fetch('/api/increment', { method: 'POST' });
    let json = await result.json();
    this.setState({ count: json.count});
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.count}>+1</button>
      </div>
    )
  }
}

export default App;
