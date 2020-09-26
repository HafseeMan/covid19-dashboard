import React, { Component } from 'react'

import RankingColumn from './RankingColumn'

export default class RankingTable extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-10 m-4 bg-white p-2 m-auto text-center">
                    
                    <div className="row">
                    
                        <RankingColumn name="Americas" rank="bar-1"/>
                        <RankingColumn name="South-East Asia" rank="bar-2"/>
                        <RankingColumn name="Europe" rank="bar-3"/>
                        <RankingColumn name="Eastern Mediterranean" rank="bar-4"/>
                        <RankingColumn name="Asia" rank="bar-5"/>
                        <RankingColumn name="Western Pacific" rank="bar-6"/>
                    
                    </div>

                </div>
            </div>
            
        )
    }
}