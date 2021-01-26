import React, { useState } from 'react'
import {TextInput, Text, View, TouchableOpacity, useS, ScrollView, Touchable} from 'react-native'

import colors from '../Colors'

// import * as firebase from '../Fire'
import Fire from "../Fire";
import styles from '../style/Style';

export default function ListCreator({navigation}) {
    const [value, onChangeText] = React.useState('');
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    const [taskName, setTaskName] = React.useState('');

    var title;

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
        // <View style={{flex: 1, flexDirection:'column'}}>
        //     <View style={{flex: 1, flexDirection:'row'}} >
        //         <TextInput
        //         style={{flex: 10, fontSize: 30, borderColor: colors.lightBlue, borderWidth: 3, borderRightWidth: 0}}
        //         onChangeText={title => onChangeText(title)}
        //         value={value}
        //         multiline={false}
        //         placeholder="List name"
        //         />
        //         <TouchableOpacity style={{flex: 1, borderColor: colors.lightBlue, borderWidth: 3}}
        //             >
        //             <Text style={{textAlign:"center", textAlignVertical:'center'}} >V</Text>
        //         </TouchableOpacity>
        //     </View>
        //         <View>
        //             <TextInput
        //             style={{flex: 10, fontSize: 30, borderColor: colors.lightBlue, borderWidth: 3, borderRightWidth: 0}}
        //             value={taskName}
        //             onChangeText={v => setTaskName(v)}
        //             >
        //             </TextInput>
        //             <TouchableOpacity
        //             style={{flex: 1, borderColor: colors.lightBlue, borderWidth: 3}}
        //             onPress={() => {
        //                 console.log({
        //                     name: value,
        //                     tasks: [
        //                         {
        //                             completed: false,
        //                             title: taskName
        //                         }
        //                     ]
        //                 })
        //                 firebase.addList({
        //                     name: value,
        //                     tasks: [
        //                         {
        //                             completed: false,
        //                             title: taskName
        //                         }
        //                     ]
        //                 });
        //                 navigation.navigate('Home');
        //             }}
        //             ><Text>add</Text></TouchableOpacity>
        //         </View>
        // </View>
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
                    name: value
                });
                navigation.navigate('Home')
            }}
            >
                <Text>Créer la liste</Text>
            </TouchableOpacity>
        </View>
    );
}