import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Logo from './Logo';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 30,
    marginRight: 20,
  }
});

export default Header;