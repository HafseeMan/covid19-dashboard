import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import axios from 'axios';
import Ranking from './components/Ranking';
import Statistics from './components/Statistics';
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  state = {
    globalStat: {},
    selectedCountryStat: {},
    allCountriesData: [],
    isLoading: true,
    location: "Global",
  }

  handleSubmit = (location) => {
    // Todo: Validate location is a valid country from Api call 
    // before setting state & finding Location.
    this.setState({ location: location })
    this.findCountry(location);
    console.log("stateAfter Location update : ", this.state)
  }

  // Search for a country in the list of returned data from api call
  findCountry = (con3) => {
    this.state.allCountriesData.forEach((country) => {
      if (country.Country === con3) {
        this.setState({ selectedCountryStat: country })
        //console.log(country);
      }
    })
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then((response) => {
        this.setState({
          allCountriesData: response.data.Countries,
          globalStat: response.data.Global,
          isLoading: false
        })
        // console.log("Data from api call: ", response)
        console.log("Data from app state: ", this.state)
      }).catch((error) => {
        console.log("Error fetching and parsing data: ", error)
      })
  }

  render() {

    const {
      globalStat,
      selectedCountryStat,
      allCountriesData,
      location } = this.state;

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
                    timeout={30000} />
                </div> :
                <div className="row">
                  <NavBar
                    data={allCountriesData}
                    location={location}
                    handleSubmit={this.handleSubmit} />

                  <div className="row">
                    {/*ranking*/}
                    <Ranking />
                    {/*statistics : TODO: render globalStat by default and specific country if selected*/}

                    {this.state.location === "Global"
                      ? <Statistics
                        cases={globalStat.TotalConfirmed}
                        recovered={globalStat.TotalRecovered}
                        deaths={globalStat.TotalDeaths} />
                      : <Statistics
                        cases={selectedCountryStat.TotalConfirmed}
                        recovered={selectedCountryStat.TotalRecovered}
                        deaths={selectedCountryStat.TotalDeaths}
                      />
                    }

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
