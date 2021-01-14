import firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDnpa5NeAkBqRIxKnsQess75cJ3MfFwnig",
    authDomain: "the-ultimate-todo-list-4994f.firebaseapp.com",
    projectId: "the-ultimate-todo-list-4994f",
    storageBucket: "the-ultimate-todo-list-4994f.appspot.com",
    messagingSenderId: "241003425517",
    appId: "1:241003425517:web:fcd7576eb9c7d0839ba6e4",
    measurementId: "G-BDV77NQC31"
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
        return firebase.firestore().collection("list");
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
