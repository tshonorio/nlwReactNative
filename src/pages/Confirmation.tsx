import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Button} from '../components/Button';
import colors from '../styles/colors';


export function Confirmation(){
    const navigation = useNavigation();
    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                🤩
                </Text>
                <Text style={styles.title}>
                    Prontinho...
                </Text>
                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas{'\n'}
                    plantinhas com muito cuidado.
                </Text>

            </View>

            <View style={styles.footer}>
                <Button
                    title="Começar"
                    onPress={handleMoveOn}
                />
            </View>

        </SafeAreaView>
        
    )

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
    },
    content:{
        flex: 1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',

    },
    emoji:{
        fontSize: 78,
        marginTop: 100,
    },
    title:{
        marginTop: -50,
        textAlign:'center',
        fontSize: 28,
        paddingHorizontal:15,
        lineHeight: 38,
        color: colors.heading,
    },
    subTitle:{
        marginTop: -50,
        textAlign:'center',
        fontSize: 15,
        paddingHorizontal:25,
        lineHeight: 38,
        color: colors.heading,
    },
    footer:{
        width:'100%',
        paddingHorizontal:75,
        marginBottom:180,
    },
});