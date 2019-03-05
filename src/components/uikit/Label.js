import React from 'react'
import { Text , StyleSheet , View } from 'react-native';

const Label = props => {

    return (

        <View  style= {styles.Label} >
            <Text style={styles.textStyle}>
               Ближайшие мероприятия
            </Text>
        </View>

    )

}


const styles = StyleSheet.create ({
    
   Label: {
       backgroundColor: '#1f1f1f',
       width: '100%',
       paddingLeft: 16,
       paddingRight: 16,
       paddingTop: 16,
       height: 55,
       
      
       
       
   },
   textStyle: {
    color: '#fff',
    fontSize: 18,
   }

})

export {Label}
