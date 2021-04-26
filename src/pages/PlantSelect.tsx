import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList, //lista para render elementos.
    

} from 'react-native';
import api from '../services/api';
import { EnviromentButton } from '../components/EnviromentButton';

import { Header } from '../components/Header';
import colors from '../styles/colors';

interface EvviromentProps{
    key: string;
    title: string;
}

export function PlantSelect(){
    const [enviroments, setEnviroment] = useState<EvviromentProps[]>([]);
    useEffect(() =>{
        async function fetchEnviroment(){
             const { data } = await api.get('plants_environments');
             setEnviroment([
             {
                 key: 'all',
                 title: 'Todos',
             },
             ...data
        ]);
        
    }
        fetchEnviroment();

},[])

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
                data={enviroments}
                renderItem={({item}) => (
                    
                    <EnviromentButton 
                    title={item.title}
                    
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
        height:50,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
        marginLeft:5,
        marginVertical:32,
    },
});
