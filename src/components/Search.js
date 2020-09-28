import PropTypes from 'prop-types'

import React, { Component } from 'react'

export class Search extends Component {


    state = {
        value: ""
    }


    // componentDidMount() {
    //     console.log(this.props)
    // }

    handleSubmitForm = (e) => {
        e.preventDefault()
        //Validate input 
        //replace(/\s+/g, '') // to replace white spaces
        if (!this.state.value.replace(/\s+/g, '') == "") {
            this.props.handleSubmit(this.state.value)
        }
        this.setState({value: ""})
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        const data = this.props.data
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <datalist id="countries">
                        {data.map((datum, index) =>
                            <option value={datum.Country} key={index}>{datum.Country}</option>
                        )}
                    </datalist>
                    <input list="countries"
                        name="country"
                        autoComplete="on"
                        placeholder="Search Country"
                        type="text"
                        className="search-field"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    data: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Search
