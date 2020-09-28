import React, { Component } from 'react'
import PropTypes from "prop-types"

import worldMap from '../global.jpg'

import Title from './Title'
import Display from './Display'


class Statistics extends Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 py-3 display text-center bg-white text-dark"
                style={{ backgroundImage: `url(${worldMap})` }}
            >
                <Title title="Statistics" />
                <div className="p-3 py-5 mx-auto"
                >
                    <Display
                        cases={this.props.cases}
                        recovered={this.props.recovered}
                        deaths={this.props.deaths}
                    />
                </div>

            </div>
        )
    }
}

Statistics.propTypes = {
    cases: PropTypes.number.isRequired,
    recovered : PropTypes.number.isRequired,
    deaths : PropTypes.number.isRequired,
}

export default Statistics