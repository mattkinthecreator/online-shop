import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyByE92Wrldk3Ko6N1rOoW_2ybBqxfLLkD0',
  authDomain: 'javangerssignin.firebaseapp.com',
  projectId: 'javangerssignin',
  storageBucket: 'javangerssignin.appspot.com',
  messagingSenderId: '712557965457',
  appId: '1:712557965457:web:f282753143a8264f118f30',
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
