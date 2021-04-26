import React from 'react';
import {
    StyleSheet, Text,
} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler'; ]

interface PlantProps extends RectButtonProps{
    data:{
        name: string;
        photo:string;  
    }
}

export const plantCardPrimary = ({data, ...rest}: PlantProps)=>{
    return{
        
    }
}