import React, {useState } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  const [playerType, setPlayerType] = useState('Social')
  const [gameDuration, setGameDuration] = useState('30 Days')

  const playerTypeChangeHandler = (playerType) => {
    setPlayerType(playerType)
  }

  const gameDurationChangeHandler = (gameDuration) => {
    setGameDuration(gameDuration)
  }

  const findGameHandler = () => {
    Alert.alert(
      'You have chosen:',
      playerType + ' Player for a game that will last ' + gameDuration + '.',
      [{ text: 'Confirm', style: 'destructive', onPress: confirmFindGameHandler }]
    );
  }

  const confirmFindGameHandler = () => {

  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
        <Card style={styles.pickersContainer}>
          <Text style={styles.pickerHeader}>Choose Your Play Style:</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={playerType}
            onValueChange={playerTypeChangeHandler}
          >
            <Picker.Item style={{color: '#fff'}} label="Productive" value="Productive" />
            <Picker.Item label="Social" value="Social" />
            <Picker.Item label="Hybrid" value="Hybrid" />
          </Picker>
          <Text style={styles.pickerHeader}>Choose Your Game Duration:</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={gameDuration}
            onValueChange={gameDurationChangeHandler}
          >
            <Picker.Item label="3 Days" value="3 Days" />
            <Picker.Item label="10 Days" value="10 Days" />
            <Picker.Item label="30 Days" value="30 Days" />
          </Picker>
        </Card>
        <TouchableOpacity style={styles.button} onPress={findGameHandler}>
          <Text style={styles.buttonText}>Find A Game</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Colors.accent
  },
  pickersContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  pickerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  picker: {
    width: '50%',
    paddingTop: 1,
  },
  pickerItem: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 40,
    padding: 10,
    textAlign: 'center',
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
    borderWidth: 2,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  buttonText:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default StartGameScreen;