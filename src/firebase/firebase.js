import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQZBjBlmWlDr5517Zgo4OgXTkJQX287hQ",
    authDomain: "ecommerce-db-b00a7.firebaseapp.com",
    databaseURL: "https://ecommerce-db-b00a7.firebaseio.com",
    projectId: "ecommerce-db-b00a7",
    storageBucket: "",
    messagingSenderId: "371892720435",
    appId: "1:371892720435:web:371af0111559b3aa"
};

export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const collectionRef = firestore.collection(`users`);

    const snapShot = await userRef.get();
    // const collectionSnapShot = await collectionRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            });
        } catch(err) {
            console.log('Error creating user: ', err.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocs = async (collectionKey, objects) => {
    // create a collection using a collection key
    const collectionRef = firestore.collection(collectionKey);

    // to do all calls
    const batch = firestore.batch();
    objects.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    // fire off our batch requests
    return await batch.commit();
};

export default firebase;
