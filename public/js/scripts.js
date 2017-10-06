// const User = require('../models/user.model');
// const Post = require('../models/post.model');
// const Slide = require('../models/slide.model');
const db = firebase.database();
const storage = firebase.storage().ref();
// const user = 
const SLIDERIMAGES = []
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getSlides() {

}

function getArticles() {

}

function getMultimedia() {
    
}
function changeSliderImages() {

}

function slideMultimediaImages() {
    
}

function getCategoryNames() {
    const names = [];
    return db.ref().child('categories').once('value', (snapshot) => {
        snapshot.forEach((category) => {
           names.push(category.val().categoryName);
        })
    }).then(() => {
        return Promise.resolve({categories:names});
    }) 
}

function getCategoryPosts(categoryName) {
    const posts = [];
    return db.ref('categories/').child(categoryName).child('categoryPosts').once('value', (snapshot) => {
        snapshot.forEach((post) => {
           posts.push(category.val());
        })
    }).then(() => {
        return Promise.resolve({posts:posts});
    }) 
}

function getSlides() {
    const slides = [];
    return db.ref().child('slides').once('value', (snapshot) => {
        snapshot.forEach((slide) => {
           posts.push(category.val());
        })
    }).then(() => {
        return Promise.resolve({slides:slides});
    }) 
}

function addNewUser() {
    const userImage = document.getElementById('user-image').files[0];
    const username = document.getElementById('input-username').value;
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        const uploadTask = storage.child(`userimages/${username}/${userImage.name}`).put(uaserImage);
        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
              alert(error);
            },
            () => {
            storage.child(`userimages/${username}/${userImage.name}`).getDownloadURL()
                .then((imageUrl) => {
                    user.updateProfile({ displayName: username, photoURL: imageUrl });
                    alert('Registered')
                });
            })
    })
    .catch((error) => {
        alert(error.message);
    });
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => alert('Logged in!'))
        .catch((error) => {
            alert(error.message);
        });
}

function addNewCategory() {
    const categoryName = document.getElementById('category-name').value;
    
    const ref = db.ref().child(`categories/${categoryName}`);
    ref.once('value')
        .then((snapshot) => {
            if(snapshot.exists()) {
                alert('Category already exists!');
            } else {
                db.ref(`categories/`).child(categoryName).set({categoryName});
            }
        })
}

function addNewPost() {
    const postImage = document.getElementById('post-image').files[0];
    const postTitle = document.getElementById('post-title').value;
    const postText = document.getElementById('post-text').value;
    const postCategory = document.getElementById('post-category').value;
    const userId = firebase.auth().currentUser.uid;
    const today = new Date();
    const postDate = MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

    const uploadTask = storage.child(`postimages/${postTitle}/${postImage.name}`).put(postImage);

    uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.log(error);
        },
        () => {
        storage.child(`postimages/${postTitle}/${postImage.name}`).getDownloadURL()
            .then((imageUrl) => {
                db.ref().child(`categories/${postCategory}/categoryPosts`).push({
                    postCategory,
                    postTitle,
                    postText,
                    postDate,
                    imageUrl,
                    userId
                })
            });
        })
}

function addNewSlide() {
    console.log('Add new Slide')
    const slideImage = document.getElementById('slide-image').files[0];
    const slideTitle = document.getElementById('slide-title').value;
    const slideText = document.getElementById('slide-text').value;

    const uploadTask = storage.child(`slideimages/${slideImage.name}`).put(slideImage);

    uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.log(error);
        },
        () => {
        storage.child(`slideimages/${slideImage.name}`).getDownloadURL()
            .then((imageUrl) => {
                db.ref().child(`slides/`).push({
                    slideTitle,
                    slideText,
                    imageUrl
                })
            });
    })
}

function addNewComment() {
    console.log('Add new Comment')
    const commentName = document.getElementById('comment-name').value;
    const commentEmail = document.getElementById('comment-email').value;
    const commentText = document.getElementById('comment-text').value;
    const today = new Date();
    const commentDate = MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
    db.ref().child(`comments/`).push({
        commentText,
        commentDate,
        commentEmail,
        commentName
    })
}

function showHomePage() {
    Promise.all([
        getSlides(),
        getArticles(),
        getMultimedia(),
        loadTemplate('admin')
        ])
        .then(([slides, articles, multimedia, template]) => {
            const data = {
                slides: slides,
                articles: articles,
                multimedia: multimedia
            }
            document.getElementById('container').innerHTML = template(categories);
        })
}

function showLoginPage() {
    console.log('1')
    fetch('../templates/login.html')
        .then((response) => {
            response.text()
                .then((html) => {
                    document.getElementById('container').innerHTML = html;
                })
        })
}

function showSignupPage() {
    console.log('1')
    fetch('../templates/signup.html')
        .then((response) => {
            response.text()
                .then((html) => {
                    document.getElementById('container').innerHTML = html;
                })
        })
}

function showAdminPage() {
    Promise.all([
        getCategoryNames(),
        loadTemplate('admin')
        ])
        .then(([categories, template]) => {
            document.getElementById('container').innerHTML = template(categories);
        })
}

function showCategoryPage() {
    Promise.all([
        getCategoryPosts(),
        loadTemplate('category')
        ])
        .then(([categories, template]) => {
            document.getElementById('container').innerHTML = template(categories);
        })
}

function showPostPage() {
    Promise.all([
        getPost(),
        loadTemplate('post')
        ])
        .then(([categories, template]) => {
            document.getElementById('container').innerHTML = template(categories);
        })
}