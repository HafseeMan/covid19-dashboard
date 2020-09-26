import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './components/NotFound'
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import NavBar from './components/NavBar';
import axios from 'axios';


class App extends Component {

  state = {
    allData: []
  }

  componentDidMount() {
    axios.get("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
      .then((response) => {
        this.setState({allData: response.data})
        console.log("Data from api call: ", response)
        console.log("Data from app state: ", this.state)
      }).catch((error) => {
        console.log("Error fetching and parsing data: ", error)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() =>
            <div className="row">
              {/* NavBar and Search bar */}
              <NavBar />
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
          } />

          {/* This route is for testing features I'm working on */}
          <Route path="/workOn" component={NavBar} />

          {/* This route is default route for not found pages */}
          <Route path="*" component={NotFound} />

        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
