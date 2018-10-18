import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './Profile.css'

export default class Profile extends Component {
    render() {
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/profile'/>
                </div>

                <div className = 'content'>
                    <div className = 'top-div'>

                    </div>

                    <div className = 'bottom-div'>
                    
                    </div>
                </div>
            </div>
        )
    }
}