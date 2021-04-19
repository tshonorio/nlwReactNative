import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';


interface ButtonProps extends TouchableOpacity{
 title: string;
}

export function Button({title}: ButtonProps){
    return(
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
      button:{
      backgroundColor:colors.green,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:16,
      
      height:56,
      width:56,
    
    },

    buttonText:{
        color: colors.white,
        fontSize:25,
    },

});