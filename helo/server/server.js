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
    CLIENT_ID, 
    DOMAIN, 
    CLIENT_SECRET, 
    ENVIORMENT
} = process.env

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
    
    const payload = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    
    let rewWithToken = await axios.post(`https://${DOMAIN}/oauth/token`, payload)
    
    let resWithUserData = await axios.get(`https://${DOMAIN}/userinfo?access_token=${rewWithToken.data.access_token}`)
    console.log('user data', resWithUserData.data)
    let {
        email,
        name, 
        picture,
        sub
    } = resWithUserData;
    
    let db = req.app.get('db');
    let foundUser = await db.find_user([sub])
    if(foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect('/#/dashboard');
    } else {
        let createdUser = await db.create_user([name, email, picture, sub])
        req.session.user = createdUser[0];
        res.redirect('/#/dashboard');
    }
})

function envCheck(req, res, next) {
    if(ENVIORMENT === 'dev'){
        req.app.get('db').get_user_by_id().then ( userWithIdOne => {
            req.session.user = userWithIdOne[0]
            next();
        })
    } else {
        
    }
}

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