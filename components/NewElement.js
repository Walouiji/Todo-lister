import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import List from '../screens/List';
import styles from '../style/Style'

export default function NewElement(props) {
    return(
        <View style={styles.content}>
            <TouchableOpacity  onPress={props.onPress}
            onLongPress={props.onLongPress}
            >
                <Text style={styles.listName}>{props.list.name}</Text>
                {/* <Text style={styles.body}>task completed / total tasks</Text> */}
            </TouchableOpacity>
        </View>
    )
}