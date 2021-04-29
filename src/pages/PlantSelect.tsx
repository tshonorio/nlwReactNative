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
import {PlantCardPrimary} from '../components/PlantCardPrimary'

interface EviromentProps{
    key: string;
    title: string;
}
interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo:string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
      }
}

export function PlantSelect(){
    const [enviroments, setEnviroment] = useState<EviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
   
    useEffect(() =>{
        async function fetchEnviroment(){
             const { data } = await api
             .get('plants_environments?_sort=title&order=asc');
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

useEffect(() =>{
    async function fetchPlants(){
         const { data } = await api.get('plants?_sort=name&_order=asc');
         setPlants(data);
          
}
    fetchPlants();

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

        <View style ={styles.plants}>
            <FlatList
                data={plants}
                renderItem={({item})=>(
                   
                    <PlantCardPrimary data={item}/>
            
            )}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}

                    numColumns={2}
                   

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

    plants:{
        flex: 1,
        paddingHorizontal:32,

    },
    
});
