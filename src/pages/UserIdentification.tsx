import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from 'react-native'; 

import { Button } from '../components/Button';


import colors from '../styles/colors';


export function UserIdentification(){

    const [isFocused, setIsFocused]= useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();
    function handleSubmit(){
        navigation.navigate('Confirmation');
    }
    
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);

    }
    function handleInputFocus(){
        setIsFocused(true);

    }

    function handleInputChange(value:string){
        setIsFilled(!!value);
        setName(value)

    }   


    return(

        <SafeAreaView style={styles.container}>  
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios'? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>

                                <Text style={styles.emoji}>
                                        {isFilled  ? '😉' :'🤔'}
                                </Text>

                                <Text style={styles.title}> 
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>

                            </View>

                            <TextInput 
                            
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder={"Digite um nome"}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            
                            />

                            <View style={styles.footer}>
                        
                                <Button 
                                title="Confirmar"
                                onPress={handleSubmit}
                                />

                            </View>
                        </View>
                    
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>



        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',

    },

    content: {
        flex: 1,
        width: '100%',
    },
    
    form: {
       
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 53,
        alignItems:'center',
    },
    header: {
        alignItems:'center'
        
    },

    emoji: {
        fontSize: 44,
    
    },
    input: {
        borderBottomWidth:1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize:18,
        marginTop:50,
        padding: 10,
        textAlign: 'center',

        
    },
    

        
    title: {
        marginTop:20,
        fontSize:24,
        lineHeight:32,
        textAlign:'center',
        color: colors.heading

    },
    footer: {
        marginTop:40,
        width:'100%',
        paddingHorizontal:20,

    },

});