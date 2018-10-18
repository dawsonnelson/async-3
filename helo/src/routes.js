import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard'

export default (
    
    <Switch>
        <Route exact path = '/' component={Auth}/>
        <Route path ='/dashboard' component={Dashboard}/>
    </Switch>
)