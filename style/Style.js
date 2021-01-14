import { StyleSheet } from 'react-native';
import colors from '../Colors'

const styles = StyleSheet.create({
    header: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 2,
    },
    addList: {
        borderWidth: 5,
        borderColor: colors.blue,
        color: colors.lightBlue,
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
        marginTop: 3,
        borderRadius: 15,
        padding: 15,
        width: 400,
        backgroundColor: colors.lightBlue,
    },
    listName: {
        textAlign: 'left',
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
    }
})

export default styles;