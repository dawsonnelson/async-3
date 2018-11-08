import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            friends: [],
            first_name: null,
            last_name: null,
            name: null

        }

        this.handleName = this.handleName.bind(this);
    }

    componentDidMount(){
        axios.get('/api/helo/getInfo')
        .then(res=>{
            console.log(res)

            this.setState({
                user_id: res.data.user_id
            })
        })
        axios.get('/api/helo/allUsers')
        .then(res=>{
            this.setState({
                users: res.data
            })
            // console.log(this.state.users)
        })

        axios.get('/api/helo/getFriends')
        .then(res=>{
            // console.log(res.data)
            this.setState({
                friends: res.data
            })
            console.log(this.state.friends)
        })
    }

    handleRemove(i){
        console.log(i)
        axios.delete(`/api/helo/removeFriend/${i}`)
        .then(res=>{
            window.location.reload()
        })
        
    }

    handleAddFriend(i){
        axios.post('/api/helo/addFriend', {user_id: i})
        .then(res=>{
            window.location.reload()
        })
    }

    renderUsers(){
        return this.state.users.map((user) =>{
            var stateUser = this.state.user_id

            if(stateUser !== user.user_id){

                // console.log(stateUser)
                // console.log(user.user_id)

                return(
                    <div className = 'friend-box'>
                        <div className = 'friend-pic-div'><img className = "friend-pic" src = {user.user_image} alt = ''/></div>
                        <div className = 'names'>
                            <span className = 'friend-first_name'>{user.first_name}</span>
                            <span className = 'friend-last_name'>{user.last_name}</span>
                        </div>
                        <div className = 'add-friend'>
                             <button className = 'add-friend-button' onClick = {() =>this.handleAddFriend(user.user_id)}>Add friend</button>
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
    renderFriends(){

        return this.state.friends.map((user) => {
            // console.log(this.state.user_id)
            // console.log(user)

            var stateUser = this.state.user_id
            if(stateUser === this.state.user_id){

                return(
                <div className = 'friend-box'>
                    <div className = 'friend-pic-div'><img className = "friend-pic" src = {user.user_image} alt = ''/></div>
                    <div className = 'names'>
                        <span className = 'friend-first_name'>{user.first_name}</span>
                        <span className = 'friend-last_name'>{user.last_name}</span>
                    </div>
                    <div className = 'add-friend'>
                        <button className = 'remove' onClick = {() =>this.handleRemove(user.friend_id)}>Remove friend</button>
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

    handleName(e){
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    render() {
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/search'/>
                </div>
                <div className = 'content'>
                    <div className = 'main-div'>
                        <div className = 'input-div'>
                            <select className = 'search-name'>
                                <option>First Name</option>
                                <option>Last Name</option>
                            </select>
                            <input className = 'search-input' onChange = {this.handleName}></input>
                            <button className = 'search-search'>Search</button>
                            <button className = 'search-reset'>Reset</button>
                        </div>
                        <div className = 'friend-div'>
                            {this.renderFriends()}
                        </div>
                        <div className = 'next-div'>
                            {this.renderUsers()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}