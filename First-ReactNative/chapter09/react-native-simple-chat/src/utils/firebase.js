import * as firebase from 'firebase';
import config from '../../firebase.json';

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const Auth = app.auth();

export const login = async ({ email, password }) => {
    const { user } = await Auth.signInWithEmailAndPassword(email, password);
    return user;
}

const uploadImage = async (url) => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', url, true);
        xhr.send(null);
    });

    const user = Auth.currentUser;
    const ref = app.storage().ref(`/profile/${user.uid}/photo.png`);
    const snapshot = await ref.put(blob, { contentType: 'image/png' });

    blob.close();
    return await snapshot.ref.getDownloadURL();
}

export const signup = async ({ email, password, name, photoUrl }) => {
    const { user } = await Auth.createUserWithEmailAndPassword(email, password);
    const storageUrl = photoUrl.startsWith('https')
        ? photoUrl
        : await uploadImage(photoUrl);
    await user.updateProfile({
        displayName: name,
        photoURL: storageUrl,
    });
    return user;
};

export const logout = async () => {
    return await Auth.signOut();
}