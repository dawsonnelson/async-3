import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './Profile.css'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            test: null,
            firstName: null,
            lastName: null,
            gender: 'male',
            hairColor: 'brown',
            eyeColor: 'blue',
            hobby: 'video-games',
            birthday: 1,
            birthMonth: 'January',
            birthYear: 1960,
        }

        this.handleUpdate = this.handleUpdate.bind(this)

    }

    handleCancel(){
        this.setState({
            test: null
        })
    }

    handleUpdate(){
        console.log('handle test')

        let { firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = this.state
       axios.put(`/api/helo/updateUser`, {
        firstName, 
        lastName, 
        gender, 
        hairColor, 
        eyeColor, 
        hobby, 
        birthday, 
        birthMonth, 
        birthYear})
       .then(res=>{
           this.props.history.push(`/dashboard`)
       }) 
    }

    handleFirstName(amount){
        this.setState({
            firstName: amount
        })
    }

    handleLastName(amount){
        this.setState({
            lastName: amount
        })
    }

    handleGender(amount){
        this.setState({
            gender: amount
        })
    }

    handleHairColor(amount){
        this.setState({
            hairColor: amount
        })
    }

    handleEyeColor(amount){
        this.setState({
            eyeColor: amount
        })
    }

    handleHobby(amount){
        this.setState({
            hobby: amount
        })
    }

    handleBirthday(amount){
        this.setState({
            birthday: amount
        })
    }

    handleBirthMonth(amount){
        this.setState({
            birthMonth: amount
        })
    }

    handleBirthYear(amount){
        this.setState({
            birthYear: amount
        })
    }


    render() {
        console.log(this.state)
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/profile'/>
                </div>

                <div className = 'content'>
                    <div className = 'top-div'>
                        <img className = 'top-pic' src = {this.props.urlInput} alt=''/>
                        <div className = 'top-name-display'>
                            <span className = 'top-name'>Jonhathon</span>
                        </div>
                        <div className = 'button-display'>
                            <button className = 'update' onClick = {this.handleUpdate}>Update</button>
                            <button className = 'cancel'>Cancel</button>
                        </div>
                    </div>

                    <div className = 'bottom-div'>
                        <div className ='first-name'>
                            <text className = 'first-name-display'>First Name</text>
                            <input className = 'first-name-input' onChange = {(e)=>this.handleFirstName(e.target.value)}></input>
                        </div>
                        <div className='hobby'>
                            <text className = 'hobby-display'>Hobby</text>
                            <select className = "hobby-input" onChange = {(e)=>this.handleHobby(e.target.value)}>
                                <option value="Video-games">Video-games</option>
                                <option value="Coding">Coding</option>
                                <option value="Hunting">Hunting</option>
                            </select>
                        </div>
                        <div className ='last-name'>
                            <text className = 'last-name-display'>Last Name</text>
                            <input className = 'last-name-input' onChange = {(e)=>this.handleLastName(e.target.value)}></input>
                        </div>
                        <div className = 'birthday'>
                            <text className = 'birthday-display'>Birthday Day</text>
                            <select className = "birthday-input" onChange = {(e)=>this.handleBirthday(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                        <div className = 'gender'>
                            <text className = 'gender-display'>Gender</text>
                            <select className = 'gender-input' onChange = {(e) =>this.handleGender(e.target.value)}>
                                <option>Male</option>
                                <option>Felmale</option>
                                <option>Attack Helicopter</option>
                            </select>
                        </div>
                        <div className='birthmonth'>
                            <text className = 'birthmonth-display'>Birthday Month</text>
                            <select className = 'birthmonth-input' onChange = {(e)=>this.handleBirthMonth(e.target.value)}>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className='hair'>
                            <text className = 'hair-display'>Hair Color</text>
                            <select className = 'hair-input' onChange = {(e)=>this.handleHairColor(e.target.value)}>
                                <option>Brown</option>
                                <option>Blonde</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className = 'birthyear'>
                            <text className = 'birthyear-display'>Birthday Year</text>
                            <select className = 'birthyear-input' onChange = {(e)=>this.handleBirthYear(e.target.value)}>
                                <option>1960</option>
                                <option>1961</option>
                                <option>1962</option>
                                <option>1963</option>
                                <option>1964</option>
                                <option>1965</option>
                                <option>1966</option>
                                <option>1967</option>
                                <option>1968</option>
                                <option>1969</option>
                                <option>1970</option>
                                <option>1971</option>
                                <option>1972</option>
                                <option>1973</option>
                                <option>1974</option>
                                <option>1975</option>
                                <option>1976</option>
                                <option>1977</option>
                                <option>1978</option>
                                <option>1979</option>
                                <option>1980</option>
                                <option>1981</option>
                                <option>1982</option>
                                <option>1983</option>
                                <option>1984</option>
                                <option>1985</option>
                                <option>1986</option>
                                <option>1987</option>
                                <option>1988</option>
                                <option>1989</option>
                                <option>1990</option>
                                <option>1991</option>
                                <option>1992</option>
                                <option>1993</option>
                                <option>1994</option>
                                <option>1995</option>
                                <option>1996</option>
                                <option>1997</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2003</option>
                                <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                                <option>2008</option>
                                <option>2009</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                
                            </select>
                        </div>
                        <div className = 'eye'>
                            <text className = 'eye-display'>Eye Color</text>
                            <select className = 'eye-input' onChange = {(e)=>this.handleEyeColor(e.target.value)}>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Brown</option>
                                <option>Hazel</option>
                                <option>Amber</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}