import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';


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
          <div className="col-3 bg-light">
            <h1>Ranking</h1>
          </div>
          {/*statistics*/}
          <div className="col-9 bg-secondary text-dark">
            <h2>GLOBAL STATISTICS</h2>
            <h1>statistics</h1>
          </div>
        </div>  
        
      </React.Fragment>
    );
  }
}

export default App;
