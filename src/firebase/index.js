import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCoqtfEv3tb1jrm1qQgeI5Vy7Il6HZbtyA',
  authDomain: 'vue-clonestagram.firebaseapp.com',
  projectId: 'vue-clonestagram',
  storageBucket: 'vue-clonestagram.appspot.com',
  messagingSenderId: '12408134327',
  appId: '1:12408134327:web:9d48a32cc5dbf94e0e8b32'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {
  db
}
