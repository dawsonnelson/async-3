import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/dashboard'/>
                </div>
                <div>
                    <span>hello world</span>
                </div>

            </div>
        )
    }
}


