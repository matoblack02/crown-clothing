import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDAkBJ3v0DnjEtgplgH8A6swidFPM_oX8k",
    authDomain: "crown-db-956e8.firebaseapp.com",
    databaseURL: "https://crown-db-956e8.firebaseio.com",
    projectId: "crown-db-956e8",
    storageBucket: "crown-db-956e8.appspot.com",
    messagingSenderId: "297686286347",
    appId: "1:297686286347:web:62fd57a121c690a079470e",
    measurementId: "G-3WMMMHDFNX"
  } 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if(!snapshot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)      
    }
  }

  return userRef
  
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
