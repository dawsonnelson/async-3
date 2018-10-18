import React from 'react'
import {Link} from 'react-router-dom'
import '../Nav/Nav.css'
import image from '../../header_logo.png'
import search from '../../assets/search.png'

export default function Nav (){
    return(
        <div className = "nav">
            <div className = 'div-helo'>
            <span className = "helo">Helo</span> <img className = 'house' src ={image}></img> <img className = 'magGlass' src={search}></img>
            </div>

            <div className = 'div-title'>
            <span className = "title">Dashboard</span>
            </div>
            <div className = 'div-logout'>
               <span className = "logout"><Link to = '/'>Logout</Link></span>
            </div>
        </div>
    )
}