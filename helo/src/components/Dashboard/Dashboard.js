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
            friends: [],
            // filterdUsers: [],
            // user_id: '',
            user_image: '',
            first_name: 'Default',
            last_name: 'Default',
            number: true
            // gender: '',
            // hair_color: '',
            // eye_color: '',
            // hobby: '',
            // birth_day: '',
            // birth_month: '',
            // birth_year: ''
        }
 
        // this.filterUsers = this.filterUsers.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
    }

    componentDidMount(){
        console.log(this.state)
        axios.get('/api/helo/getInfo')
        .then(res=>{
            console.log(res)

            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                user_image: res.data.user_image,
                user_id: res.data.user_id,
                filterdUsers: null
            })

            axios.get('/api/helo/allUsers')
            .then(res=>{
                console.log(res.data)

                this.setState({
                    users: res.data
                })
                console.log(this.state.friends)
            })

            axios.get('/api/helo/getFriends')
            .then(res=>{
                console.log(res.data)
                this.setState({
                    friends: res.data
                })
                console.log(this.state)
            })
        })
    }

    handleAddFriend(i){
        axios.post('/api/helo/addFriend', {user_id: i})
        .then(res=>{

        })
        
    }

    handleRemove(){
        axios.delete('/api/helo/removeFriend')
        .then(res=>{
            window.location.reload()
        })
        console.log('yeah')
    }

    // filterUsers = (userFilter) => {
    //     let filterdUsers = this.state.users
    //     filterdUsers = filterdUsers.filter((user) =>{
    //         let userName = user.first_name + user.last_name
    //         return userName.indexOf(
    //             userFilter) !== -1
    //     })

    //     this.setState({
    //         filterdUsers
    //     })
    //     console.log(this.state.filterdUsers)
    // }

    renderFriends(){
        // console.log(this.state) 
        // let users = this.state.users
        // console.log(users.user_image)
        return this.state.users.map((user) => {
            var stateUser = this.state.user_id
            
            if(stateUser !== user.user_id){

                console.log(this.state.user_id)
                console.log(this.state)
                // console.log(user.user_id)
                return(
                    <div className = 'friend-box'>
                        <div className = 'friend-pic-div'><img className = "friend-pic" src = {user.user_image} alt = ''/></div>
                        <div className = 'names'>
                            <span className = 'friend-first_name'>{user.first_name}</span>
                            <span className = 'friend-last_name'>{user.last_name}</span>
                        </div>
                        <div className = 'add-friend'>
                            { this.state.number ? <button className = 'add-friend-button' onClick = {() =>this.handleAddFriend(user.user_id)}>Add friend</button> : <button className = 'remove' onClick = {()=>this.handleRemove()}>Remove Friend</button>}
                        </div>
                    </div>
                )
            } else {
                return(
                    []
                )
            }
        })


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


