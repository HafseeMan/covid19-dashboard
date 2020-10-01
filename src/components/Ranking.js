import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from "./Title";
import Table from './RankingTable';


class Ranking extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-dark py-3 bg-cream text-center">
                <Title title="Global Ranking" />
                <Table data={this.props.countries}
                    africa={this.props.africa}
                    austra={this.props.austra}
                    nAmerica={this.props.nAmerica}
                    sAmerica={this.props.sAmerica}
                    europe={this.props.europe}
                    asia={this.props.asia}
                />
            </div>
        )
    }
}



Ranking.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Ranking;