import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RankingColumn from './RankingColumn';

class RankingTable extends Component {

    state = {
        data: [],
        continentCases: [
            {
                name: "Africa",
                cases: this.props.africa
            },
            {
                name: "Asia",
                cases: this.props.asia
            },
            {
                name: "Australia",
                cases: this.props.austra
            },
            {
                name: "Europe",
                cases: this.props.europe
            },
            {
                name: "North-America",
                cases: this.props.nAmerica
            },
            {
                name: "South-America",
                cases: this.props.sAmerica
            },
        ],
    }


    componentDidMount() {
        console.log("Data before sorting ", this.props.data)
        this.sortData();
        console.log(this.props)
    }

    // componentDidUpdate() {
    //     console.log("Update state... ", this.state)
    // }

    sortData = () => {
        // console.log("Sorting ... ")
        // let arr = this.props.data.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1);
        // this.setState({ data: arr })
        // console.log("Data after sorting: ", arr)
        this.state.continentCases.sort((a,b) => (a.cases < b.cases) ? 1 : -1)
    }

    render() {
        return (
            <div className="row">
                <div className="col-10 m-4 bg-white p-2 m-auto text-center">

                    <div className="row">
                        {/* <RankingColumn name="Americas" rank="bar-1"/>
                        <RankingColumn name="South-East Asia" rank="bar-2"/>
                        <RankingColumn name="Europe" rank="bar-3"/>
                        <RankingColumn name="Eastern Mediterranean" rank="bar-4"/>
                        <RankingColumn name="Asia" rank="bar-5"/>
                        <RankingColumn name="Western Pacific" rank="bar-6"/> */}

                        {/* {this.state.data.slice(0, 6).map((country, index) => (
                            <RankingColumn name={country.Country} rank={`bar-${index + 1}`} key={index} cases={country.TotalConfirmed} />
                        ))} */}
                        {this.state.continentCases.map((country, index) => (
                            <RankingColumn name={country.name} rank={`bar-${index + 1}`} key={index} cases={country.cases} />
                        ))}

                    </div>

                </div>
            </div>

        )
    }
}

RankingTable.propTypes = {
    data: PropTypes.array.isRequired,
}

export default RankingTable;