import loginTemplate from '../templates/precompiled/login.template';
import signupTemplate from '../templates/precompiled/signup.template';
class AuthenticationController {
    showLoginPage() {
        document.getElementById('container').innerHTML = loginTemplate();
    }

    showSignupPage() {
        document.getElementById('container').innerHTML = signupTemplate();
    }

    addNewUser() {
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
                    router.navigate('home');
                    alert('Registered and loged in');
                });
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    loginUser() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                router.navigate('home')
                alert('Logged in!')
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    logoutUser() {
        firebase.auth().signOut()
            .then(() => {
                alert('Signed out');
            });
    }
}

const authenticationController = new AuthenticationController;
export default authenticationController;

