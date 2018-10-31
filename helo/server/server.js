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
    
    // let { 
    // user_id,
    // user_image, 
    // first_name,
    // last_name,
    // gender,
    // hair_color,
    // eye_color,
    // hobby,
    // birth_day,
    // birth_month,
    // birth_year
    // } = resWithUserData;

    let auth0_id = resWithUserData.data.sub
    // console.log(resWithUserData.sub)
    
    let db = req.app.get('db');
    // console.log('before find user')
    let foundUser = await db.find_user([auth0_id])
    // console.log(resWithUserData.data.sub)
    // console.log(foundUser)
    // console.log('after find user')
    if(foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect('/#/dashboard');
    } else {
        // console.log('before create user')
        let user = await db.create_user([auth0_id])
        // console.log('after create user')
        req.session.userId = user[0].id;
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

app.post('/auth/logout', (req, res) =>{
    req.session.destroy();
    res.redirect('http://localhost:3000/#/')
})

app.put(`/api/helo/updateUser`, (req,res)=>{
    // console.log(req.session.user.user_id)
    const db = req.app.get('db')
    let {firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear} = req.body
    let user_id = req.session.user.user_id
    db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthday, birthMonth, birthYear, user_id])
    .then(resp=>{
        res.status(200).send(resp)
        // console.log(req.session)
    })
    .catch(console.log)
})

app.get('/api/helo/getInfo', (req,res) =>{
    const db = req.app.get('db')
    // let first_name = req.session.user.first_name
    // console.log(req.session)
    db.get_user([req.session.user.user_id])
    .then(resp=>{
        res.status(200).send(resp[0])
    })
    .catch(console.log)
})



app.listen(SERVER_PORT, () =>{
    console.log(`listening on port ${SERVER_PORT}`)
});


// app.get(`/api/userData`, (req, res) =>{
//     const db = req.app.get('db')
//     // console.log(req.session)
//     db.get_user([req.session.userId])
//     .then(resp=>{
//         res.status(200).send(resp)
//     })
//     .catch(console.log)
// })
