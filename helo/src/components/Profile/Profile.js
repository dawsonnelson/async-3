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
                        <div className ='first-name'>
                            <text className = 'first-name-display'>First Name</text>
                            <input className = 'first-name-input'></input>
                        </div>
                        <div className='hobby'>
                            <text className = 'hobby-display'>Hobby</text>
                            <input className = 'hobby-input'></input>
                        </div>
                        <div className ='last-name'>
                            <text className = 'last-name-display'>Last Name</text>
                            <input className = 'last-name-input'></input>
                        </div>
                        <div className = 'birthday'>
                            <text className = 'birthday-display'>Birthday Day</text>
                            <input className = 'birthday-input'></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}