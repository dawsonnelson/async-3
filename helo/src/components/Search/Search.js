import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            first_name: null,
            last_name: null,
            name: null

        }

        this.handleName = this.handleName.bind(this);
    }

    componentDidMount(){
        axios.get('/api/helo/allUsers')
        .then(res=>{
            this.setState({
                users: res.data
            })
            console.log(this.state.users)
        })
    }

    renderFriends(){

        return this.state.users.filter((input) => input.input = this.state.name ).map((user) => {
            return(
                <div className = 'friend-box'>
                    <div className = 'friend-pic-div'><img className = "friend-pic" src = {user.user_image} alt = ''/></div>
                    <div className = 'names'>
                        <span className = 'friend-first_name'>{user.first_name}</span>
                        <span className = 'friend-last_name'>{user.last_name}</span>
                    </div>
                    <div className = 'add-friend'>
                        <button className = 'add-friend-button' onClick = {this.handleAddFriend}>Add friend</button>
                    </div>
                </div>
            )
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
                    </div>
                </div>
            </div>
        )
    }
}