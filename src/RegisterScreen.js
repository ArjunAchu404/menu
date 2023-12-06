// RegisterScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error === 'Registration successful!') {
      // Redirect to the 'Login' screen after a successful registration
      // Replace 'Login' with the name of your login screen
      navigation.navigate('Login');
    }
  }, [error, navigation]);

  const handleRegister = () => {
    // Perform registration logic here
    // For simplicity, let's check if username, password, and confirmPassword are non-empty
    if (username && password && confirmPassword) {
      // Check if password and confirmPassword match
      if (password === confirmPassword) {
        // Registration successful, you can add your registration logic here
        // For this example, let's just display a success message
        setError('Registration successful!');
      } else {
        setError('Password and Confirm Password do not match');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  const navigateToLogin = () => {
    // Navigate to the 'Login' screen
    // Replace 'Login' with the name of your login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.loginLink} onPress={navigateToLogin}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
