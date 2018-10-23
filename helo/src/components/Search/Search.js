import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './Search.css'

export default class Search extends Component {
    render() {
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/search'/>
                </div>
                <div className = 'content'>
                    <div className = 'main-div'>
                        <div className = 'input-div'>
                            <select className = 'search-name'>
                                <option>First Name</option>
                                <option>Last Name</option>
                            </select>
                            <input className = 'search-input'></input>
                            <button className = 'search-search'>Search</button>
                            <button className = 'search-reset'>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}