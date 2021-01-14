import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Colors';
import styles from '../style/Style'

export default function AddButton(props) {
    return (
        <View style={{marginVertical:48}}>
            <Text style={styles.add}>{props.content}</Text>
            <TouchableOpacity style={styles.addList} onPress={props.ret} >
                <Text style={{ fontSize: 25, color: colors.blue}}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

