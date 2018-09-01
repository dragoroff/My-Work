import React, { Component } from 'react';
import './App.css';
import CircularProgressBar from './Components/circular-progress-bar';
import Example from './Components/examples/example';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      progress1: 100,
      progress2: 50,
      progress3: 75,
      progress4: 45
    }
  }

  onChangeProgress = (target, value) => {
    this.setState({
      [target]: value
    });
  }
  render() {
    return (
      <div className="App">
        <h2>SVG Circular Progress bar</h2>
        <div className="container">
          <Example id="progress1" defaultValue={this.state.progress1}
          onChangeProgress={this.onChangeProgress}>
          <CircularProgressBar 
            percentage={this.state.progress1}
            className="progress-blue"
            progressOffset={0}
            strokeWidth={8}
          />
          </Example>

          <Example id="progress2" defaultValue={this.state.progress2}
          onChangeProgress={this.onChangeProgress}>
          <CircularProgressBar 
            percentage={this.state.progress2}
            className="progress-red"
            progressOffset={0}
            strokeWidth={10}
          />
          </Example>

          <Example id="progress3" defaultValue={this.state.progress3}
          onChangeProgress={this.onChangeProgress}>
          <CircularProgressBar 
            percentage={this.state.progress3}
            className="progress-green" 
            progressOffset={16}
            strokeWidth={8}
          />
          </Example>

          <Example id="progress3" defaultValue={this.state.progress4}
          onChangeProgress={this.onChangeProgress}>
          <CircularProgressBar 
            percentage={this.state.progress4}
            className="progress-purple"         
          />
          </Example>
        </div>
      </div>
    );
  }
}

export default App;
