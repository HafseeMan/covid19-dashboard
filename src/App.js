import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import axios from 'axios';
import Ranking from './components/Ranking';
import Statistics from './components/Statistics';
import AlertDialog from './components/AlertDialog';

import {
  africa,
  europe,
  asia,
  north_america,
  south_america,
  australia_oceania
} from './utils/Continent'

import './App.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import worldMap from './img/global.jpg'
import afroImg from './img/africa.jpg'
import asiaImg from './img/asia.jpg'
import austraImg from './img/australia_oceania.jpg'
import europeImg from './img/europe.jpg'
import nAmericaImg from './img/north_america.jpg'
import sAmericaImg from './img/south_america.jpg'

class App extends Component {

  state = {
    globalStat: {},
    selectedCountryStat: {},
    allCountriesData: [],
    isLoading: true,
    location: "Global",
    alertDialog: { isOpen: false, errorValue: "" },
    africa: [],
    australia_oceania: [],
    asia: [],
    europe: [],
    north_america: [],
    south_america: [],
    not_found: [],
    map: worldMap,
    africaCases: 1473511,
    australiaCases: 29480,
    asiaCases : 11671559,
    NAmericaCases : 8618336,
    SAmericaCases: 8002783,
    europeCases: 3840081,
  }

  handleSubmit = (location) => {
    // Check if searched location is a valid country from Api call dataset 
    // before finding Location data setting state.
    this.state.allCountriesData.forEach((country) => {
      if (country.Country === location) {
        this.setState({ location: location, selectedCountryStat: country })
        // find country in continent arrays and set appropraite image for continent
        this.findContinent_ofCountry(location)
      } else {
        // TODO: show an alert dialog that "Location cannot be found in database | Invalid location"
        //this.setState({ alertDialog: { isOpen: true, errorValue: location } })
        // {alertDialog.isOpen === true && <AlertDialog isOpen={alertDialog.isOpen} location={alertDialog.errorValue} />}
      }
    })

    //this.findCountry(location);
    console.log("stateAfter Location update : ", this.state)
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then((response) => {
        this.setState(prev => ({
          allCountriesData: response.data.Countries,
          globalStat: response.data.Global,
          isLoading: false,
        }))
        // console.log("Data from api call: ", response)
        this.sortCountriesIntoContinent();
        console.log("Data from app state: ", this.state)
      }).catch((error) => {
        console.log("Error fetching and parsing data: ", error)
      })
  }

  sortCountriesIntoContinent = () => {
    this.state.allCountriesData.forEach(country => {
      //console.log(country.Country, " was found in array SA? ", country.Country === south_america.includes("Argentina") )
      if (south_america.includes(country.Country)) {

        this.setState((prevState) => ({
          south_america: prevState.south_america.concat([country])
        })); return;

      } else if (australia_oceania.includes(country.Country)) {
        this.setState(prevState => ({
          australia_oceania: prevState.australia_oceania.concat([country])
        })); return;
      } else if (north_america.includes(country.Country)) {
        this.setState((prevState) => ({
          north_america: prevState.north_america.concat([country])
        })); return;

      } else if (europe.includes(country.Country)) {
        this.setState((prevState) => ({
          europe: prevState.europe.concat([country])
        })); return;

      } else if (asia.includes(country.Country)) {
        this.setState((prevState) => ({
          asia: prevState.asia.concat([country])
        })); return;

      } else if (africa.includes(country.Country)) {
        this.setState(prevState => ({
          africa: prevState.africa.concat([country])
        })); return;

      } else {
        // Add to not found object
        this.setState((prevState) => ({
          not_found: prevState.not_found.concat([country])
        }))
      }
    });

    this.sumUpCasesByContinent();
    
  }

  findContinent_ofCountry = (country) => {
    if (south_america.includes(country)) {
      this.setState({ map: sAmericaImg }); return;
    } else if (australia_oceania.includes(country)) {
      this.setState({ map: austraImg }); return;
    } else if (north_america.includes(country)) {
      this.setState({ map: nAmericaImg }); return;
    } else if (europe.includes(country)) {
      this.setState({ map: europeImg }); return;
    } else if (asia.includes(country)) {
      this.setState({ map: asiaImg }); return;
    } else if (africa.includes(country)) {
      this.setState({ map: afroImg }); return;
    }
    else {
      this.setState({ map: worldMap })
    }
  }

  sumUpCasesByContinent = () => {
    const sumSAmerica = this.state.south_america.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ SAmericaCases: sumSAmerica })
    //console.log("Total cases: for South America " + sumSAmerica)

    const sumAustra = this.state.australia_oceania.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ australiaCases: sumAustra })
    // console.log("Total cases: for Australia " + sumAustra)

    const sumNAmerica = this.state.north_america.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ NAmericaCases: sumNAmerica })
    // console.log("Total cases: for North America " + this.state.north_america.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0))

    const sumEurope = this.state.europe.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ europeCases: sumEurope })
    // console.log("Total cases: for Europe " + sumEurope)

    const sumAsia = this.state.asia.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ asiaCases: sumAsia })
    // console.log("Total cases: for Asia " + sumAsia)

    const sumAfrica = this.state.africa.reduce((a, { TotalConfirmed }) => a + TotalConfirmed, 0);
    this.setState({ africaCases: sumAfrica })
    // console.log("Total cases: for Africa " + sumAfrica)
  }

  // componentDidUpdate(){
  //   console.log("state update... ",this.state)
  // }

  render() {

    const {
      globalStat,
      selectedCountryStat,
      allCountriesData,
      location,
      africaCases,
      NAmericaCases,
      SAmericaCases,
      asiaCases,
      europeCases,
      australiaCases,
      alertDialog } = this.state;

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() =>
            <div>
              {/* NavBar and Search bar */}
              {this.state.isLoading ?
                <div className="">
                  <Loader
                    className="loader"
                    type="Oval"
                    color="#008080"
                    height={110}
                    width={110}
                    timeout={30000} />
                </div> :
                <div>
                  {/* <button onClick={this.sortCountriesIntoContinent}>find countries</button> */}
                  <NavBar
                    data={allCountriesData}
                    location={location}
                    handleSubmit={this.handleSubmit} />

                  <div className="row">
                    {/*ranking*/}
                    <Ranking
                      countries={allCountriesData}
                      africa={africaCases}
                      austra={australiaCases}
                      nAmerica={NAmericaCases}
                      sAmerica={SAmericaCases}
                      europe={europeCases}
                      asia={asiaCases}
                    />
                    {/*statistics : render globalStat by default and specific country if selected*/}
                    {this.state.location === "Global"
                      ? <Statistics
                        cases={globalStat.TotalConfirmed}
                        recovered={globalStat.TotalRecovered}
                        deaths={globalStat.TotalDeaths}
                        map={this.state.map} />
                      : <Statistics
                        cases={selectedCountryStat.TotalConfirmed}
                        recovered={selectedCountryStat.TotalRecovered}
                        deaths={selectedCountryStat.TotalDeaths}
                        map={this.state.map}
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
