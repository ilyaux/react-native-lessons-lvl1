import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = props => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({

   viewStyle: {
    backgroundColor: '#000',
    height: 55,
    justifyContent: 'center',
    marginTop: 24,
    paddingLeft: 16,
    shadowColor: '#000',
    
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4,
    elevation: 10,
    position: 'relative'
   },
   textStyle: {
    color: '#fff',
    fontSize: 22,
    
   }

})



export { Header }