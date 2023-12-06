// ThoughtScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, BackHandler, StyleSheet } from 'react-native';

const ThoughtScreen = ({ navigation }) => {
  const [randomThought, setRandomThought] = useState('');

  useEffect(() => {
    const onBackPress = () => {
      // Close the app when the back button is pressed
      BackHandler.exitApp();
      return true; // Prevent default behavior (closing the app)
    };

    // Add event listener for the back button press
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  useEffect(() => {
    // Fetch or generate a list of random thoughts
    const thoughtsList = [
      'The only way to do great work is to love what you do.',
      'Life is what happens when you’re busy making other plans.',
      'Believe you can and you’re halfway there.',
      'Strive not to be a success, but rather to be of value.',
      // Add more thoughts as needed
    ];

    // Select a random thought from the list
    const randomIndex = Math.floor(Math.random() * thoughtsList.length);
    const selectedThought = thoughtsList[randomIndex];

    // Update the state to trigger a re-render with the new thought
    setRandomThought(selectedThought);
  }, []);

  const handleSkip = () => {
    // Navigate to the next screen after clicking the skip button.
    // Replace 'Login' with the name of your next screen.
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.thoughtText}>{randomThought}</Text>
      <Button title="Skip" onPress={handleSkip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thoughtText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ThoughtScreen;