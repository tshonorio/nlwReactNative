import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import colors from '../styles/colors';

interface EnviromentButtonProps extends RectButtonProps {
    title:string;
    active?:boolean;

}


export function EnviromentButton({
    title,
    active = false,
    ...rest
}: EnviromentButtonProps){

    return(
        <RectButton
            style={[
                styles.container, 
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text   style={[
                styles.text,
                active && styles.textActive
            
            ]}>
                {title}
            </Text>
        </RectButton>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.shape,
        height:40,
        width:76,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        marginRight:4,

    },
    containerActive:{
      
        color:colors.green,
        backgroundColor:colors.green_light,
    },
    text: {
        color:colors.heading,
        

    },
    textActive:{
        color:colors.green_dark,
        fontWeight:'bold',
    },

});
