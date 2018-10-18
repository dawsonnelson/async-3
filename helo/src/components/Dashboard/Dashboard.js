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
                <div className = 'content'>
                    <div className = 'top-content'>
                        <div className = 'name-box'>
                            <span>hello world</span>
                        </div>
                        <div className = 'desc'>
                            <span>desc</span>
                        </div>
                    </div>
                    <div className = 'recommended-div'>
                        <span className = 'rec-friend'>Recommended Friends</span>
                    </div>
                </div>
            </div>
        )
    }
}


