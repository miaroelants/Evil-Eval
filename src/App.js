import React, { Component } from 'react';
import {Buttons} from './Buttons'
import {ToCalculate} from './ToCalculate'
import {Outcome} from './Outcome'
import {Evaluate} from './Evaluate'
import {ClearAll} from './ClearAll'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Calculate: <ToCalculate />
          Outcome: <Outcome />
        </div>
        <div>
          <Buttons/>
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
