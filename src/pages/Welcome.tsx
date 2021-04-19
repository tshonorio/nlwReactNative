import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from '../components/Button';
import  wateringImg from '../assets/watering.png';
import colors from '../styles/colors';



export function Welcome() {
    const [visible, setVisible] = useState(false);
    
    function handleVisibility(){
        setVisible(true)
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
               Gerencie {'\n'}
               suas plantas {'\n'}
               de forma fácil
            </Text>
            
            <Image style={styles.image} source={wateringImg}/>

          

            <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
            </Text>

        <Button title=">"></Button>

        </SafeAreaView>
            
 )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },

    title:{
        fontSize:28,
        fontWeight: 'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 15,
        paddingBottom:20,
    },

    subtitle:{
        textAlign:'center',
        fontSize:22,
        paddingHorizontal:20,
        color: colors.heading,
        marginBottom:40,
    },

    button:{
      backgroundColor: colors.green,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:16,
      
      height:56,
      width:56,  
    
    },

    image:{
        width: 292,
        height: 284,
        marginBottom:10,
    },

    buttonText:{
        color: colors.white,
        fontSize:35,
    },

});
