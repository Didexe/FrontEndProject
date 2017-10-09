import { db, storage } from './database';
class Multimediadata {
    getMultimedia() {
        const multimedia = [];
        return db.ref().child('multimedia').once('value', (snapshot) => {
            snapshot.forEach((multimedium) => {
                multimedia.push(multimedium.val());
             });
         }).then(() => {
             return Promise.resolve(multimedia);
        });
    }

    addMultimedia(multimediaImage, multimediaText) {
        const uploadTask = storage.child(`multimediaimages/${multimediaImage.name}`).put(multimediaImage);

        return uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert(error);
            },
            () => {
            storage.child(`multimediaimages/${multimediaImage.name}`).getDownloadURL()
                .then((imageUrl) => {
                    db.ref().child(`multimedia/`).push({
                        multimediaText,
                        imageUrl,
                    });
                });
        });
    }
}

const multimediaData = new Multimediadata;
export default multimediaData;
