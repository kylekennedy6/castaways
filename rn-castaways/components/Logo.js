import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import Colors from '../constants/colors';

const Logo = () => {
  return (
    <Image 
      style={styles.logo}
      source={require('./logo.png')} 
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    borderColor: Colors.primary
  }
});

export default Logo;