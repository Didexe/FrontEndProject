/* global firebase */

const db = firebase.database();
const storage = firebase.storage().ref();

export {
    db,
    storage,
};
