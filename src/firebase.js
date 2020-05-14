import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDfzisEVawz9WrrH1tnVvkf0pv2VZWo2M",
    authDomain: "psa-graph.firebaseapp.com",
    databaseURL: "https://psa-graph.firebaseio.com",
    projectId: "psa-graph",
    storageBucket: "psa-graph.appspot.com",
    messagingSenderId: "862268273916",
    appId: "1:862268273916:web:ecda643313dd549481d379",
    measurementId: "G-SGMTFTM5CR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2020, 6, 13);
//     }
//   }
// }

export default firebase;