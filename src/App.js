import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import axios from 'axios';
import Ranking from './components/Ranking';
import Stat from './components/Statistics';
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  state = {
    allData: [],
    isLoading: true,
    location: "World-Wide"
  }

  handleSubmit = (location) => {
    this.setState({ location: location })
    //console.log(this.state.location)
  }

  componentDidMount() {
    axios.get("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
      .then((response) => {
        this.setState({ allData: response.data, isLoading: false })
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
            <div>
              {/* NavBar and Search bar */}
              {this.state.isLoading ?
                <div className="App">
                  <Loader
                    className="loader"
                    type="Oval"
                    color="#008080"
                    height={150}
                    width={150}
                    timeout={3000} />
                </div> :
                <div className="row">
                  <NavBar
                    data={this.state.allData}
                    location={this.state.location}
                    handleSubmit={this.handleSubmit} />

                  <div className="row">
                    {/*ranking*/}
                    <Ranking />
                    {/*statistics*/}
                    <Stat />
                  </div>
                </div>
              }
            </div>
          } />

          {/* This route is for testing features I'm working on
          <Route path="/workOn" component={NavBar} /> */}

          {/* This route is default route for not found pages */}
          <Route path="*" component={NotFound} />

        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
