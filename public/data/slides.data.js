import db from './database';
import storage from './storage';
class SlidesController {
    addSlide(slideImage, slideTitle, slideText) {
        const uploadTask = storage.child(`slideimages/${slideImage.name}`).put(slideImage);

        return uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert(error);
            },
            () => {
            storage.child(`slideimages/${slideImage.name}`).getDownloadURL()
                .then((imageUrl) => {
                    db.ref().child(`slides/`).push({
                        slideTitle,
                        slideText,
                        imageUrl,
                    });
                });
        });
    }

    getSlides() {
        const slides = [];
        return db.ref().child('slides').once('value', (snapshot) => {
            snapshot.forEach((slide) => {
                slides.push(slide.val());
             });
         }).then(() => {
             return Promise.resolve(slides);
        });
    }
}

const slidesController = new SlidesController();
export default slidesController;
