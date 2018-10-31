import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import profilePic from '../../assets/profilePic.png'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            // user_id: '',
            user_image: '',
            first_name: 'Default',
            last_name: 'Default',
            // gender: '',
            // hair_color: '',
            // eye_color: '',
            // hobby: '',
            // birth_day: '',
            // birth_month: '',
            // birth_year: ''
        }
    }

    componentDidMount(){
        console.log(this.state)
        axios.get('/api/helo/getInfo')
        .then(res=>{
            console.log(res)

            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                user_image: res.data.user_image
            })

            axios.get('/api/helo/allUsers')
            .then(res=>{
                // console.log(res.data)

                this.setState({
                    users: res.data
                })
                // console.log(this.state)
            })
        })
    }

    renderFriends(){
        console.log(this.state)
        let users = this.state.users
        return(
            <div className = 'friend-box'>
                <div className = 'friend-pic-div'><img className = "friend-pic" src = {users.user_image} alt = ''/></div>
                <div className = 'friend-name'></div>
                <div className = 'add-friend'>
                    <button className = 'add-friend-button'>Add friend</button>
                </div>
            </div>
        )
    }

    render() {
        // console.log(this.state)
        let profilePic = this.state.user_image
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/dashboard'/>
                </div>
                <div className = 'content'>
                    <div className = 'top-content'>
                        <div className = 'name-box'>
                            <div className = 'pic'>
                                <img className = 'img' src={profilePic} alt=''/>
                            </div>
                            <div className = 'info'>
                                <span className = 'firstName'>{this.state.first_name}</span>
                                <span className = 'lastName'>{this.state.last_name}</span>
                                <Link to ="/profile"><button className = 'edit-button'>Edit Profile</button></Link>
                            </div>
                        </div>
                        <div className = 'desc'>
                            <span>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                        </div>
                    </div>
                    <div className = 'recommended-div'>
                        <span className = 'rec-friend'>Recommended Friends</span>
                        <span className = 'sort-by'>Sorted by</span>
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
                        <div className = 'friend-div'>
                            {this.renderFriends()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


