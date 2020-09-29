import React from 'react'
import Search from './Search'
import PropTypes from 'prop-types'

function NavBar(props) {

    return (
        <div className="container-fluid navbar-bg">
            <h1 className="covid-text">Covid-19<span>  DashBoard</span></h1>
            <Search
                data={props.data}
                handleSubmit={props.handleSubmit}
            />
            <div className="location-text">
                <h5>{props.location}</h5>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    data: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    location : PropTypes.string.isRequired,
}

export default NavBar
