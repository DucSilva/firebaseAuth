import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import Loading from '../screens/Loading';

const AuthStack = createStackNavigator({
    Login: Login,
    Signup: Signup,
})

const App = createSwitchNavigator({
    Loading: Loading,
    App: Profile,
    Auth: AuthStack
}, {
    initializeApp: "Loading"
})

export default createAppContainer(App);