import firebase from 'firebase'

var firebaseConfig = {
    apiKey: 'AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4',
    authDomain: 'my-react-burger-1ce01.firebaseapp.com',
    databaseURL: 'https://my-react-burger-1ce01.firebaseio.com',
    projectId: 'my-react-burger-1ce01',
    storageBucket: 'my-react-burger-1ce01.appspot.com',
    messagingSenderId: '1090815861850',
    appId: '1:1090815861850:web:4fe6264163a25f3ae0e463'
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
