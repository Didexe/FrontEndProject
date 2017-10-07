// const User = require('../models/user.model');
// const Post = require('../models/post.model');
// const Slide = require('../models/slide.model');
const db = firebase.database();
const storage = firebase.storage().ref();
// const user = 
// const SLIDERIMAGES = []
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

Handlebars.registerHelper('isSmallerThan7', function(index, options) {
    if(index < 7) {
        return options.fn(this);
    }
    return options.inverse(this);
 })
function changeSliderImages() {
    
    }
    
function slideMultimediaImages() {

}

function clearInputs() {
    document.querySelectorAll("input, textarea")
        .forEach((input) => {
            if(input.value != '') {
                input.value = '';
            }
        });
}

function getSlides() {
    const slides = [];
    return db.ref().child('slides').once('value', (snapshot) => {
        snapshot.forEach((slide) => {
            slides.push(slide.val());
         })
     }).then(() => {
         return Promise.resolve(slides);
    })
}

function getArticles() {
    const articles = [];
    return db.ref().child('articles').once('value', (snapshot) => {
        snapshot.forEach((article) => {
            articles.push(article.val());
         })
     }).then(() => {
         return Promise.resolve(articles);
    })
}

function getMultimedia() {
    const multimedia = [];
    return db.ref().child('multimedia').once('value', (snapshot) => {
        snapshot.forEach((multimedium) => {
            multimedia.push(multimedium.val());
         })
     }).then(() => {
         return Promise.resolve(multimedia);
    })
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

function getPost(id) {
    
}

function addNewUser() {
    const userImage = document.getElementById('input-user-image').files[0];
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
                });
            }).then(() => {
                router.navigate('/');
                alert('Registered and loged in');
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
        .then(() => {
            router.navigate('')
            alert('Logged in!')
        })
        .catch((error) => {
            alert(error.message);
        });
}

function logoutUser() {
    firebase.auth().signOut()
        .then(() => {
            alert('Signed out')
        })
}

function addNewCategory() {
    const categoryName = document.getElementById('input-category-name').value;
    
    const ref = db.ref().child(`categories/${categoryName}`);
    ref.once('value')
        .then((snapshot) => {
            if(snapshot.exists()) {
                alert('Category already exists!');
            } else {
                db.ref(`categories/`).child(categoryName).set({categoryName});
            }
        }).then(() => {
            showAdminPage();
            alert('New category added')
        }) 
}

function addNewPost() {
    const postImage = document.getElementById('input-post-image').files[0];
    const postTitle = document.getElementById('input-post-title').value;
    const postText = document.getElementById('input-post-text').value;
    const postCategory = document.getElementById('input-post-category').value;
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
                const newPostKey = firebase.database().ref().child('posts').push().key;
                const postData = {
                    postCategory,
                    postTitle,
                    postText,
                    postDate,
                    imageUrl,
                    userId
                }
                const updates = {};
                updates[`posts/${newPostKey}`] = postData;
                updates[`categories/${postCategory}/categoryPosts/${newPostKey}`] = postData;
            
                return firebase.database().ref().update(updates);
            })
            .then(() => {
                clearInputs();
                alert('New post added')
            });
        })
}

function addNewSlide() {
    const slideImage = document.getElementById('input-slide-image').files[0];
    const slideTitle = document.getElementById('input-slide-title').value;
    const slideText = document.getElementById('input-slide-text').value;

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
            })
            .then(() => {
                clearInputs();
                alert('New slide added')
            });
    }) 
}

function addNewComment() {
    const commentName = document.getElementById('input-comment-name').value;
    const commentEmail = document.getElementById('input-comment-email').value;
    const commentText = document.getElementById('input-comment-text').value;
    const today = new Date();
    const commentDate = MONTHS[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
    db.ref().child(`comments/`).push({
        commentText,
        commentDate,
        commentEmail,
        commentName
    }).then(() => {
        showPostPage();
        alert('Add new Comment')
    })
}

function addNewArticle() {
    const articleImage = document.getElementById('input-article-image').files[0];
    const articleTitle = document.getElementById('input-article-title').value;
    const articleText = document.getElementById('input-article-text').value;

    const uploadTask = storage.child(`articleimages/${articleImage.name}`).put(articleImage);

    uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.log(error);
        },
        () => {
        storage.child(`articleimages/${articleImage.name}`).getDownloadURL()
            .then((imageUrl) => {
                db.ref().child(`articles/`).push({
                    articleTitle,
                    articleText,
                    imageUrl
                })
            })
            .then(() => {
                clearInputs();
                alert('New article added')
            });
})
}

function addNewMultimedia() {
    const multimediaImage = document.getElementById('input-multimedia-image').files[0];
    const multimediaText = document.getElementById('input-multimedia-text').value;

    const uploadTask = storage.child(`multimediaimages/${multimediaImage.name}`).put(multimediaImage);

    uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.log(error);
        },
        () => {
        storage.child(`multimediaimages/${multimediaImage.name}`).getDownloadURL()            
            .then((imageUrl) => {
                db.ref().child(`multimedia/`).push({
                    multimediaText,
                    imageUrl
                })
            })
            .then(() => {
                clearInputs();
                alert('New multimedia added')
            });
    })
}

function showHomePage() {
    console.log('Loading Home page')
    Promise.all([
        getSlides(),
        getArticles(),
        getMultimedia(),
        loadTemplate('home')
        ])
        .then(([slides, articles, multimedia, template]) => {
            const data = {
                slides: slides,
                articles: articles,
                multimedia: multimedia
            }
            console.log(data);
            document.getElementById('container').innerHTML = template(data);
        })
}

function showLoginPage() {
    fetch('../templates/login.html')
        .then((response) => {
            response.text()
                .then((html) => {
                    document.getElementById('container').innerHTML = html;
                })
        })
}

function showSignupPage() {
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