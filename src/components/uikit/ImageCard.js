import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { w } from '../../../constants'

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover } = styles
  const { image, name } = data
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: image}} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
  },
  sub: {
    shadowColor: '#000',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowRadius: 8,
    
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4, 
    elevation   : 10,
  },
  h1: {
    paddingTop: 10,
    
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
     
    
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 8
  }
})
export { ImageCard }