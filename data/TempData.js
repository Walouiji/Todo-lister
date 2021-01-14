 import {React, Text} from 'react-native';
import styles from '../style/Style'

 import TempData from './TempData.json';

function ListOfToDo(){
    const list = TempData.map(item => (
        <View style={styles.content}>
          <Text style={styles.content}>{item.TodoList.listName}</Text>
        </View>
      ));
}

export default ListOfToDo;