import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../constants/style';

import { updateEmail, updatePassword, signup } from '../actions/user'

class Signup extends React.Component {
    static navigationOptions = {
        header: null
    }

    // state = {
    //     name: '',
    //     email: '',
    //     password: '',
    // }

    handleSignUp = () => {
        // const { email, password } = this.state;
        // Firebase.auth()
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredential => {
        //         return userCredential.user.updateProfile({
        //             displayName: this.state.name
        //         })
        //     })
        //     .catch(error => console.log(error))
        this.props.signup();
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    style={styles.inputBox}
                    placeholder="Email"
                    autoCapitalize="none"
                />
                <TextInput
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleSignUp}
                >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.signupText}>Have you account? Login to app</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);