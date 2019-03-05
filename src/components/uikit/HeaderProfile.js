import React from 'react'
import { StyleSheet } from 'react-native'
import { Toolbar } from 'react-native-material-ui'




const HeaderProfile = props => {
  
  return (
    <Toolbar
        style={styles.container}
        style={{
         container: { backgroundColor: '#1f1f1f'},
         
         }}
        leftElement="arrow-back"
        centerElement="Илья Краморов"
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
  )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 24,
  },
});



export { HeaderProfile }