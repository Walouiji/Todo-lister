import React, { useState , useEffect} from 'react';
import {ScrollView, Text, View, TouchableOpacity } from 'react-native';

import NewElement from '../components/NewElement';
import Fire from '../Fire';

import styles from '../style/Style';
import colors from '../Colors';

export default function Home({navigation}){

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
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
    }, []);
    return(
    <View>
        <ScrollView >
          <View>
            {lists.map(list => (
              <View key={list.id}>          
                <NewElement content={list.name} onPress={()=>navigation.navigate('List', {list})}/>
              </View>
            )
      )}
          </View>
          <TouchableOpacity style={styles.addList} onPress={()=>navigation.navigate('Create List', {firebase})} >
                  <Text style={{ fontSize: 25, color:colors.blue}}>+</Text>
              </TouchableOpacity>
        </ScrollView>
        
    </View>
    );
  }

/* TODO
ajouter menu options
rétrécir margin éléments
padding entre éléments et ajouts liste
*/
