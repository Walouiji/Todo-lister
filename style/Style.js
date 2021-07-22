import { StyleSheet, Dimensions } from 'react-native';
import colors from '../Colors'

const styles = StyleSheet.create({
    header: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 2,
    },
    addList: {
        borderWidth: 5,
        borderColor: colors.blue,
        color: colors.black,
        borderRadius: 20,
        padding: 8,
        marginTop: 3,
        alignSelf: "center",
        alignItems: 'center',
        width: 400,
    },
    add: {
        color: colors.blue,
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 4,
        alignSelf: "center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      head: {
        fontWeight: "bold",
        color: colors.darkBlue,
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
        top: 50,
      },
      body:{
          color: colors.black,
          textAlign: 'right'
      },
      content: {
          alignSelf: 'center',
          height: Dimensions.get('screen').height/17,
          marginTop: 3,
          borderRadius: 15,
          width: Dimensions.get('screen').width-12,
          backgroundColor: colors.lightBlue,
    },
    listName: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: "bold",
        color: colors.black,
    },
    switchB: {
        color: colors.black
    },
    item:{
        borderColor: colors.black,
        borderWidth: 1,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width:150, 
        alignSelf:'center'
    },
    titre: {
        color: colors.black,
        fontWeight:'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
    }
})

export default styles;