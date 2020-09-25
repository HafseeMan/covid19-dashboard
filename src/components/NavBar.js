import React from 'react'
import Search from './Search'

function NavBar() {
    return (
        <div className="container-fluid navbar-bg">
            <h1 className="covid-text">Covid-19<span>  DashBoard</span></h1>
            <Search/>
            <div className="location-text">
                <h1>Nigeria</h1>
            </div>
        </div>
    )
}

export default NavBar
