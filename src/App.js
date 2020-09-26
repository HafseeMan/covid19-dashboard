import React, { Component } from 'react';

import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';

import Ranking from './components/Ranking'
import Stat from './components/Statistics'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {/*Title*/}
          <div className="bg-primary col-12 text-light p-2">
           <h1 className="text-center text-capitalize">Covid 19 dashboard</h1>
          </div>
          {/*search bar*/}
          <div className="bg-dark col-12 text-light p-2">
           <p className="text-center ">Search bar</p>
          </div>
          {/*ranking*/}
          <Ranking/>
          {/*statistics*/}
          <Stat/>
        </div>  
        
      </React.Fragment>
    );
  }
}

export default App;
