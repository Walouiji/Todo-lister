import React from 'react';
import { View, TextInput, ScrollView, Switch, TouchableOpacity } from 'react-native';

import styles from '../style/Style'

export default function List({route}) {
    return(
        <View>
            <TouchableOpacity style={styles.addList}></TouchableOpacity>
            <ScrollView key={route.params.list.id} >
                {route.params.list.tasks.map(list=> (
                    <View style={styles.content}>
                        <View style={{flex:1, flexDirection:'row'}} > 
                            <TextInput 
                            value={list.title}
                            style={{flex:7}} 
                            key={route.params.list.tasks.id} />
                            <Switch value={list.is_completed} style={{flex:3}} />
                        </View>
                        </View>
                ) 
                )}
            </ScrollView>
        </View>
    )
}