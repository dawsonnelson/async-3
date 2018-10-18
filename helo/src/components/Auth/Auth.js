import React, {Component} from 'react'
import logo from '../../assets/logo.png'
import './Auth.css'


export default class Auth extends Component {

    render(){
        return(
            <div className = 'app'>
                <div className = 'background'>
                    <div className = 'log-box'>
                        <img className = 'logo' src ={logo} alt = 'no'></img>
                        <div>
                            <span className = 'auth-helo'>Helo</span>
                        </div>
                        <div className = 'something'>
                            <button className = 'login-register'>Login/Register</button>
                        </div>
                    </div>
                </div>
                
    
                
            </div>
        )
    }
}