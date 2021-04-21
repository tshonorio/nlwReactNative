import React, { useState } from 'react';
import {SafeAreaView,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity,
        Dimensions,
        View,
        } from 'react-native';

import  wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import {
    Feather,
} from '@expo/vector-icons';


export function Welcome() {
     return(
        <SafeAreaView 
            style={styles.container}
        >
            <View style={styles.wrapper}>

            <Text 
                style={styles.title}
            >
               Gerencie {'\n'}
               suas plantas de {'\n'}
               forma fácil
            </Text>
            
            <Image 
                style={styles.image} 
                source={wateringImg}
                resizeMode="contain"
            
            />

          

            <Text 
            
                style={styles.subtitle}
            
            >
            Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                
                    <Feather 
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
               
            </TouchableOpacity>
            </View>

        </SafeAreaView>
            
 )
}


const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20,
        padding:10,
    },

    title:{
        fontSize:28,
        fontWeight: 'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 30,
       
    },

    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading,
       
    },

    image:{
        
        height: Dimensions.get('window').width*0.6,
       
    },

    button:{
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        height:56,
        width:56,  
      
      },

      buttonIcon:{
        fontSize:32,
        color: colors.white,
      },

});
