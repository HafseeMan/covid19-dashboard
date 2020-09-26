import React, { Component } from 'react'

import Title from "./Title";
import Table from './RankingTable'

export default class Ranking extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-dark py-3 bg-cream text-center">
                <Title title="Global Ranking"/>
                <Table/>
            </div>    
        )
    }
}