import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import axios from 'axios';
import Ranking from './components/Ranking';
import Statistics from './components/Statistics';
import AlertDialog from './components/AlertDialog';
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
    alertDialog: { isOpen: false, errorValue: "" },
    africa: [],
    australia_oceania: [],
    asia: [],
    europe: [],
    north_america: [],
    south_america: [],
    not_found: [],
  }

  handleSubmit = (location) => {
    // Check if searched location is a valid country from Api call dataset 
    // before finding Location data setting state.
    this.state.allCountriesData.forEach((country) => {
      if (country.Country === location) {
        this.setState({ location: location, selectedCountryStat: country })
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
        this.findContinent_ofCountry();
        console.log("Data from app state: ", this.state)
      }).catch((error) => {
        console.log("Error fetching and parsing data: ", error)
      })
  }

  findContinent_ofCountry = () => {
    const africa = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Camoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Côte d'Ivoire", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania, United Republic of", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", "Congo (Brazzaville)", "Congo (Kinshasa)", "Comoros", "Western Sahara", "Réunion"];
    const europe = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom", "Ukraine", "Belarus", "Switzerland", "Moldova", "Bosnia and Herzegovina", "Macedonia, Republic of", "Norway", "Albania", "Republic of Kosovo", "Iceland", "Andorra", "San Marino", "Monaco", "Liechtenstein", "Holy See (Vatican City State)", "Serbia", "Montenegro"];
    const asia = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Burma", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine Territory", "Philippines", "Qatar", "Russian Federation", "Saudi Arabia", "Singapore", "Korea (South)", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen", "Palestinian Territory", "Syrian Arab Republic (Syria)", "Viet Nam", "Taiwan, Republic of China", "Brunei Darussalam", "Lao PDR", "Macao, SAR China"];
    const north_america = ["Antigua", "Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States of America", "Antigua and Barbuda", "Saint Vincent and Grenadines"];
    const south_america = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela (Bolivarian Republic)"];
    const australia_oceania = ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"];

    this.state.allCountriesData.forEach(country => {
      //console.log(country.Country, " was found in array SA? ", country.Country === south_america.includes("Argentina") )
      if (south_america.includes(country.Country)) {

        this.setState((prevState) => ({
          south_america: prevState.south_america.concat([country])
        }))

      } else if (australia_oceania.includes(country.Country)) {
        this.setState(prevState => ({
          australia_oceania: prevState.australia_oceania.concat([country])
        }))
      } else if (north_america.includes(country.Country)) {
        this.setState((prevState) => ({
          north_america: prevState.north_america.concat([country])
        }))

      } else if (europe.includes(country.Country)) {
        this.setState((prevState) => ({
          europe: prevState.europe.concat([country])
        }))

      } else if (asia.includes(country.Country)) {
        this.setState((prevState) => ({
          asia: prevState.asia.concat([country])
        }))

      } else if (africa.includes(country.Country)) {
        this.setState(prevState => ({
          africa: prevState.africa.concat([country])
        }))

      } else {
        // Add to not found object
        this.setState((prevState) => ({
          not_found: prevState.not_found.concat([country])
        }))
      }
    });
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
                    height={150}
                    width={150}
                    timeout={30000} />
                </div> :
                <div>
                  {/* <button onClick={this.findContinent_ofCountry}>find countries</button> */}
                  <NavBar
                    data={allCountriesData}
                    location={location}
                    handleSubmit={this.handleSubmit} />

                  <div className="row">
                    {/*ranking*/}
                    <Ranking data={allCountriesData} />
                    {/*statistics : render globalStat by default and specific country if selected*/}
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
