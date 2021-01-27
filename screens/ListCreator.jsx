import React, { useState } from 'react'
import {TextInput, Text, View, TouchableOpacity, useS, ScrollView, Touchable} from 'react-native'

import colors from '../Colors'
import Fire from "../Fire";
import styles from '../style/Style';

export default function ListCreator({navigation}) {
    const [value, onChangeText] = useState('');
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    const [taskName, setTaskName] = useState('');

    const firebase = new Fire((error) => {
        if(error) {
          return alert("Error Happened");
        }
        firebase.getLists(lists => {
          setLists(lists);
          setLoading(false);
        });
        return function unsub() {
          firebase.detach();
        };
      });

    return(
        <View style={{top:'50%'}} >
            <TextInput 
            style={styles.addList}
            placeholder="Nom de la liste"
            onChangeText={title => onChangeText(title)}
            value={value}
            />
            <TouchableOpacity
            style={styles.addList}
            onPress={() => {
                firebase.addList({
                    name: value,
                    tasks: []
                });
                if(loading == false){
                navigation.navigate('Menu')}
            }}
            >
                <Text>Créer la liste</Text>
            </TouchableOpacity>
        </View>
    );
}