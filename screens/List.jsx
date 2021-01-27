import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView, Switch, TouchableOpacity, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Fire from '../Fire'

import styles from '../style/Style'

export default function List({route}) {
	const [list] = useState(route.params.list);
    const isFocused = useIsFocused()
    const [task, addTask] = useState('');
    const [, setLists] = useState([]);
    const [, setLoading] = useState(true);

    const [] = useState(task.title);

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

    useEffect(() => {
    } , [isFocused])

    return(
        <View style={{flex:1, flexDirection:'column'}} >
            <View>
                <Text style={styles.titre} >{list.name}</Text>
            </View>
            <ScrollView key={list.id} style={{flex:4}} >
                {list.tasks.map(task => {
                    return (
                        <View style={styles.content} key={task.id}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TextInput
                                    value={task.title}
                                    style={{ flex: 7 }} />
                                <Switch value={task.completed} style={{ flex: 1 }}
                                    onValueChange={() => {
                                        list.tasks.push({ completed: !task.completed, title: task.title });
                                        firebase.updateList(list);
                                    } } />
                                <Text></Text>
                            </View>
                        </View>
                    );
                } 
                )}
            </ScrollView>
        <View style={{flex:1}}>
            <TextInput 
            style={styles.addList}
            placeholder="Nom de la tâche"
            onChangeText={task => addTask(task)}
            value={task}
            />
            <TouchableOpacity
            style={styles.addList}
            onPress={() => {
                list.tasks.push({ completed: false, title: task })
                firebase.updateList(list);
                addTask('')
            }}
            >
                <Text>Créer la tâche</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}