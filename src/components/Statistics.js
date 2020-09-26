import React, { Component } from 'react'

import worldMap from '../global.jpg'

import Title from './Title'
import Display from './Display'


export default class Statistics extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 py-3 display text-center bg-white text-dark"
                 style={{ backgroundImage: `url(${worldMap})`}} 
            >
                     <Title title="Statistics"/>
                <div className="p-3 py-5 mx-auto"
                >
                      <Display
                               cases="3,000,000" 
                               recovered="2,999,999" 
                               deaths="1"
                      />  
                </div>
                      
            </div>
        )
    }
}