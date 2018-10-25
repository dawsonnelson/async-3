require('dotenv').config()
const express = require('express');
const dotenv = require('dotenv');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios')
const { 
    SERVER_PORT,
    CONNECTION_STRING, 
    SECRET, 
    REACT_APP_CLIENT_ID, 
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_SECRET, 
    ENVIORMENT
} = process.env

// console.log(process.env)

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())


app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

// app.get(`/api/helo/displayUser`, (req,res)=>{
//     const db = req.app.get(`db`)
//     db.get_user([req.session.userId])
//     .then(resp=>{
//         res.status(200).send(resp)
//     })
//     .catch(console.log)
// })

app.get('/auth/callback', async (req, res) => {
    // console.log('string')
    try{
    
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    
    let rewWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${rewWithToken.data.access_token}`)
    
    let {
    auth0_id, 
    user_image, 
    first_name,
    last_name,
    gender,
    hair_color,
    eye_color,
    hobby,
    birth_day,
    birth_month,
    birth_year
    } = resWithUserData;
    
    let db = req.app.get('db');
    console.log('before find user')
    let foundUser = await db.find_user([auth0_id])
    console.log('after find user')
    if(foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect('/#/dashboard');
    } else {
        console.log('before create user')
        let createdUser = await db.create_user([auth0_id, user_image, first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year])
        console.log('after create user')
        req.session.user = createdUser[0];
        res.redirect('/#/dashboard');
    }
} catch(error){
    console.log(error)
}
})

// function envCheck(req, res, next) {
//     if(ENVIORMENT === 'dev'){
//         req.app.get('db').get_user_by_id().then ( userWithIdOne => {
//             req.session.user = userWithIdOne[0]
//             next();
//         })
//     } else {
        
//     }
// }

app.put(`/api/helo/updateUser`, (req,res)=>{
    let {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = req.body
    const db = req.app.get('db')
    db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.get('/api/userData', (req, res) => {
    if(req.session.user){
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send("FAILURE")
    }
})

app.listen(SERVER_PORT, () =>{
    console.log(`listening on port ${SERVER_PORT}`)
});