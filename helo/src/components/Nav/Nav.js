import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Nav/Nav.css'
import image from '../../header_logo.png'
import search from '../../assets/search.png'
import axios from 'axios'
import Search from '../Search/Search';

export default class Nav extends Component{
    constructor(props){
        super(props);

        this.logoutButton = this.logoutButton.bind(this);
    }

    logoutButton(){
        axios.post('/auth/logout')
        .then( ()=>{
            this.props.history.push('/');
        })
    }

render() {
    var title = this.props.url
    if(title === '/dashboard'){
        return (
            <div className = "nav">
            <div className = 'div-helo'>
            <span className = "helo">Helo</span> <Link to = '/Dashboard'><img className = 'house' src ={image} alt = 'no'></img></Link> <Link to = '/Search'><img className = 'magGlass' src={search} alt = 'no'></img></Link>
            </div>

            <div className = 'div-title'>
                <span className = "title">Dashboard</span>
            </div>
            <div className = 'div-logout'>
               <span className = "logout"><Link to = '/'>Logout</Link></span>
            </div>
        </div>
        )
    } else if (title === '/search') {
        return(
                <div className = "nav">
                    <div className = 'div-helo'>
                    <span className = "helo">Helo</span> <Link to = '/Dashboard'><img className = 'house' src ={image} alt = 'no'></img></Link> <Link to = '/Search'><img className = 'magGlass' src={search} alt = 'no'></img></Link>
                    </div>
        
                    <div className = 'div-title'>
                        <span className = "title">Search</span>
                    </div>
                    <div className = 'div-logout'>
                       <span className = "logout"><Link to = '/'>Logout</Link></span>
                    </div>
                </div>
            )
    } else if ( title === '/profile') {
        return(
                <div className = "nav">
                    <div className = 'div-helo'>
                    <span className = "helo">Helo</span> <Link to = '/Dashboard'><img className = 'house' src ={image} alt = 'no'></img></Link> <Link to = '/Search'><img className = 'magGlass' src={search} alt = 'no'></img></Link>
                    </div>
        
                    <div className = 'div-title'>
                        <span className = "title">Profile</span>
                    </div>
                    <div className = 'div-logout'>
                       <span className = "logout"><Link to = '/'>Logout</Link></span>
                    </div>
                </div>
            )
        }
    }
}


// console.log(this.props.url)