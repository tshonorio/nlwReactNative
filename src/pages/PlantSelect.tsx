import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList, //lista para render elementos.
    


} from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';

import { Header } from '../components/Header';
import colors from '../styles/colors';

export function PlantSelect(){

    return(
     <View style={styles.container}>
          <View style={styles.header}>

                <Header/>
                
                <Text style={styles.title}>
                    Em qual ambiente 
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>

          </View>

        <View>
            <FlatList
                data={[1,2,3,4,5]}
                renderItem={({item}) => (
                    
                    <EnviromentButton 
                    title="Cozinha"
                    active 
                    />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
            
            />
        </View>

      

     </View>    
        
        
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal:30,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontWeight: 'bold',
        lineHeight:20,
        marginTop:15,
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        lineHeight:20,
        
    },
    enviromentList:{
        height:40,
        justifyContent: 'center',
        paddingBottom:5,
        marginLeft:5,
        marginVertical:32,
    },
});
