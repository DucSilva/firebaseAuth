import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../constants/style';
import * as firebase from 'firebase';

export default class Profile extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        displayName: ''
    }

    componentDidMount() {
        const { email, name } = firebase.auth().currentUser;
        console.log('user==>>>', firebase.auth().currentUser)
        this.setState({
            email,
            displayName: name
        })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.email}</Text>
                <Text>
                    {this.state.displayName === '' ? 'éo có name' : this.state.displayName}
                </Text>
                <TouchableOpacity onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}