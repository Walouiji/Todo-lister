import { StyleSheet } from 'react-native';
import colors from '../Colors'

const darkStyle = StyleSheet.create({
    backDark: {
        backgroundColor: '#282a36',

    },
    darkAddList: {
        borderWidth: 5,
        borderColor: '#6272a4',
        color: '#6272a4',
        borderRadius: 20,
        padding: 8,
        alignSelf: "center",
        alignItems: 'center',
        width: 350,
    },
    darkadd: {
        color: '#6272a4',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 4,
        alignSelf: "center",
    },
    darkContent: {
        alignSelf: 'center',
        marginTop: 3,
        borderRadius: 15,
        padding: 15,
        width: 350,
        backgroundColor: '#6272a4',  
    }
})

export default darkStyle;