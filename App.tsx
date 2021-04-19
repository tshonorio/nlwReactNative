import React from 'react';
import{ Text, View, StyleSheet } from 'react-native';
export default function app(){
  return(
    <View style={style.container}>
    
      <Text>
        NLW#5
      </Text>

    </View>   

  )
}



/*=========================================STYLES=============================================*/

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  }

})