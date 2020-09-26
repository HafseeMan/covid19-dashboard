import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <form>
                <datalist id="countries">
                    <option value="Nigeria">Nigeria</option>
                    <option value="United States">United States </option>
                    <option value="United Kingdom">United Kingdom </option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                </datalist>
                <input list="countries" name="country" autoComplete="on" type="text" className="search-field" />                
            </form>
        )
    }
}

export default Search
