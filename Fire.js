import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3wanq-ODhN__Q_huWrbuPjUsmsKgsRWk",
    authDomain: "todolister-e0ed8.firebaseapp.com",
    databaseURL: "https://todolister-e0ed8.firebaseio.com",
    projectId: "todolister-e0ed8",
    storageBucket: "todolister-e0ed8.appspot.com",
    messagingSenderId: "1043908609266",
    appId: "1:1043908609266:web:e942dc99ffdf864dbb7c6b"
};


export default class Fire {
    
    constructor(callback) {
        this.init(callback);
    }

    init(callback) {
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                callback(null);
            }
            else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        });
    }
    get ref() {
        return firebase.firestore().collection("lists");
    }
    getLists(callback){
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });
            callback(lists);   
        }, function(error) {
            console.error(error);
        });
    }
    addList(list) {
        let ref = this.ref;
        ref.add(list);
    }
    deleteList(list) {
        let ref = this.ref;
        ref.doc(list.id).delete();
    }
    updateList(list) {
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }
}

/*firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};


export const createList = (name, tasks) => {
    return db.collection('lists').add({
        name: name,
        tasks
    })
}

export const getLists = () => {
    return db.collection('lists').get()
}*/