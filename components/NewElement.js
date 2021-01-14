import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import List from '../screens/List';
import styles from '../style/Style'

export default function NewElement(props) {
    
    return(
        <View>
            <TouchableOpacity style={styles.content} onPress={props.onPress} >
                <Text style={styles.listName}>{props.content}</Text>
                <Text style={styles.body}>task completed / total tasks</Text>
            </TouchableOpacity>
        </View>
    )
}