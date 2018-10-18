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
                        
                    </div>
                </div>
            </div>
        )
    }
}