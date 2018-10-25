import React, {Component} from 'react'
import logo from '../../assets/logo.png'
import './Auth.css'


export default class Auth extends Component {

    login(){
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
        
    }

    render(){
        console.log(process.env)
        return(
            <div className = 'app'>
                <div className = 'background'>
                    <div className = 'log-box'>
                        <img className = 'logo' src ={logo} alt = 'no'></img>
                        <div>
                            <span className = 'auth-helo'>Helo</span>
                        </div>
                        <div className = 'something'>
                            <button className = 'login-register' onClick ={this.login}>Login/Register</button>
                        </div>
                    </div>
                </div>
                
    
                
            </div>
        )
    }
}
