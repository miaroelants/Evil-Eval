import React, { Component } from 'react';
import { Buttons } from './Buttons'
import ToCalculate from './ToCalculate'
import Evaluate from './Evaluate'
import ClearAll from './ClearAll'

// container component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ToCalculate />

        </div>
        <div>
          <Buttons />
        </div>
        <div>
          <Evaluate />
          <ClearAll />
        </div>
      </div>
    );
  }
}

export default App;
