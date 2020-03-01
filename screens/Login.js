import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login } from '../actions/user';

import styles from '../constants/style';
// import Firebase from '../config/Firebase';

class Login extends React.Component {
    static navigationOptions = {
        header: null
    }

    handleLogin = () => {
        this.props.login();
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.email}
                    onChangeText={(email) => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.password}
                    onChangeText={(password) => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSignup}
                    onPress={() => this.props.navigation.navigate('Signup')}
                >
                    <Text style={styles.signupText}>Don't have an account yet? Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)