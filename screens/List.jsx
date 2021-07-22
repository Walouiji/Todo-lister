import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView, Switch, TouchableOpacity, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Fire from '../Fire'

import styles from '../style/Style'

export default function List({route}) {
	const [list] = useState(route.params.list);
    const isFocused = useIsFocused()
    const [task, addTask] = useState('');
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    const firebase = new Fire((error) => {
        if(error) {
          return alert("Error Happened");
        }
        return function unsub() {
          firebase.detach();
        };
      });

    useEffect(() => {
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
    } , [isFocused])

    return(
        <View style={{flex:1, flexDirection:'column'}} >
            <View>
                <Text style={styles.titre} >{list.name}</Text>
            </View>
            <ScrollView key={list.id} style={{flex:1}} >
                {list.tasks.map(task => {
                    return (
                        <View style={styles.content} key={task.id}>
                            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
                            >
                                <Text
                                    style={{ flex: 10 }}>{task.title}</Text>
                                <Switch value={task.completed} style={{ flex: 1 }}
                                    onValueChange={() => {
                                        list.tasks.push({ completed: !task.completed, title: task.title });
                                        firebase.updateList(list);
                                    } } />
                            </TouchableOpacity>
                        </View>
                    );
                } 
                )}
            </ScrollView>
        <View >
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