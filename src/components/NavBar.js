import React, { useEffect } from 'react'
import Search from './Search'
import PropTypes from 'prop-types'

function NavBar(props) {

    // useEffect(() => {
    //     console.log(props)
    // })

    return (
        <div className="container-fluid navbar-bg">
            <h1 className="covid-text">Covid-19<span>  DashBoard</span></h1>
            <Search
                data={props.data}
                handleSubmit={props.handleSubmit}
            />
            <div className="location-text">
                <h3>{props.location}</h3>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    data: PropTypes.array.isRequired,
}

export default NavBar
