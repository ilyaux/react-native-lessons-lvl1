import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    
    
    position: 'absolute',
    bottom: 55,
    marginRight: 16,
    justifyContent: 'center',
    width: '100%',
    height: 55 , 
    backgroundColor: '#E22A6F',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#E22A6F',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.4,
    elevation: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    
    fontSize: 16,
  }
});

export { Button }