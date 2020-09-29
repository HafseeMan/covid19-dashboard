import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from "./Title";
import Table from './RankingTable';


class Ranking extends Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-dark py-3 bg-cream text-center">
                <Title title="Global Ranking"/>
                <Table data={this.props.data}/>
            </div>    
        )
    }
}

Ranking.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Ranking;