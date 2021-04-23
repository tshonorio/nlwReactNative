import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    	} from 'react-native';
import colors from '../styles/colors';
import userImage from '../assets/thiago.jpg';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

        export function Header(){
            return (
                <View style={styles.container}>
                    <View>
                        
                        <Text style={styles.greeting}>Olá,</Text>
                        <Text style={styles.userName}>Thiago</Text>

                    </View>

                    <Image source={userImage} style={styles.image}/>

                </View>
            )

        }


const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: getStatusBarHeight(),
        
        
    },
    

    image:{
        width:85,
        height:85,
        borderRadius:45,
        
    },
    greeting:{
        fontSize:40,
        color:colors.heading,
       
        
        
    },
    userName:{
        fontSize:32,
        color:colors.heading,
        fontWeight:'bold',
    },
});