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
                            <span>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                        </div>
                    </div>
                    <div className = 'recommended-div'>
                        <span className = 'rec-friend'>Recommended Friends</span>
                        <text className = 'sort-by'>Sorted by</text>
                        <select className = 'rec-input'>
                            <option>First Name</option>
                            <option>Last name</option>
                            <option>Gender</option>
                            <option>Hair Color</option>
                            <option>Eye Color</option>
                            <option>Hobby</option>
                            <option>Birthday Day</option>
                            <option>Birthday Month</option>
                            <option>Birth Year</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}


