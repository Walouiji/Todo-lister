import React from 'react'
import {TextInput, Text, View, TouchableOpacity} from 'react-native'

import colors from '../Colors'

export default function ListCreator(route) {
    console.log(route.params.firebase)
    const [value, onChangeText] = React.useState('');

    var title = ""
    var list = []
    return(
        <View style={{flex: 1, flexDirection:'column'}}>
            <View style={{flex: 1, flexDirection:'row'}} >
                <TextInput
                style={{flex: 10, fontSize: 30, borderColor: colors.lightBlue, borderWidth: 3, borderRightWidth: 0}}
                onChangeText={title => onChangeText(title)}
                value={value}
                multiline={false}
                placeholder="List name"
                />
                <TouchableOpacity style={{flex: 1, borderColor: colors.lightBlue, borderWidth: 3}}
                    onPress={newList(title, list)}
                    >
                    <Text style={{textAlign:"center", textAlignVertical:'center'}} >V</Text>
                </TouchableOpacity>
            </View>
                <TextInput
                multiline={true}
                style={{flex: 20,fontSize: 20, textAlignVertical: "top", marginTop: 8}}
                placeholder="Add element"
                onSubmitEditing={event => list.push(event.nativeEvent.text)}
                onSubmitEditing={event => console.log(event.nativeEvent.text)}
                />
        </View>
    );
}

function newList(title, tasks) {
    var list = {
        "title": title,
        tasks: tasks
    }
    
}