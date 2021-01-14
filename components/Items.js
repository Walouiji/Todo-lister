import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import styles from '../style/Style'

export default function Item(props) {
    const [isCompleted, setIsCompleted] = useState(false);
    const toggleSwitch = () => setIsCompleted(previousState => !previousState);
    return(
        <View>
            <Text>{isCompleted.toString()}</Text>
            <Switch 
            onValueChange={toggleSwitch}
            value={isCompleted}/>
        </View>
    );
}