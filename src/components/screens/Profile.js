import React from 'react'
import { View , StyleSheet , Text , ScrollView } from 'react-native';
import { HeaderProfile , ImageProfile } from '../uikit/'



export default class Profile extends React.Component  {

   render () {
       return (
         
        <View style={styles.Profile}>
          
          <View style = {styles.Header}>
          <HeaderProfile/>
          </View>
          <ImageProfile/>
          

        </View>

       )
   }
 

}

const styles = StyleSheet.create ({
   Profile: {
       backgroundColor: '#1f1f1f',
       height: '100%'
   },
   Header : {
    marginTop: 24,
}
})

export {Profile}