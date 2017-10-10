function slideDirection(direction) {
        const numberOfImages = document.getElementsByClassName('slider-image').length;
        const currentIndex = document.getElementsByClassName('slider-image visible')[0].id.split('-')[2];
        let index = parseInt(currentIndex, 10) + parseInt(direction, 10);
        console.log(currentIndex);
        console.log(index);
        console.log(numberOfImages);
        if (index > numberOfImages - 1) {
            index = 0;
        } if (index < 0) {
            index = numberOfImages - 1;
        }
        slideSliderImages(index);
}
function slideSliderImages(index) {
        document.getElementsByClassName('slider-image visible')[0].className = 'slider-image hidden';
        document.getElementById('slider-image-' + index).className = 'slider-image visible';
        document.getElementsByClassName('slider-text-field visible')[0].className = 'slider-text-field hidden';
        document.getElementById('slider-text-field-' + index).className = 'slider-text-field visible';
        document.getElementsByClassName('control-bottom active')[0].classList.remove('active');
        document.getElementById('control-bottom-' + index).classList.add('active');
    }

function slideMultimediaImages(direction) {
    const numberOfVisible = 7;
    const allImages = document.getElementsByClassName('media-item tooltip');
    const len = allImages.length;
    if (direction === 'left') {
        for (let i = 0; i <= len; i += 1) {
                if (allImages[i].className === 'media-item tooltip visible') {
                    if (i+numberOfVisible < len) {
                        allImages[i].className = 'media-item tooltip hidden';
                        allImages[i+numberOfVisible].className = 'media-item tooltip visible'
                        break;
                    } else {
                            break;
                        }
                }
            }
    } else {
        for (let i = len-1; i >= 0; i -= 1) {
                if (allImages[i].className === 'media-item tooltip hidden') {
                    continue;
            } else {
                if (i-numberOfVisible >= 0) {
                    allImages[i].className = 'media-item tooltip hidden';
                    allImages[i-numberOfVisible].className = 'media-item tooltip visible'
                    break;
            }
        }
    }
}
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            router.navigate('home')
            // window.location.hash('home')
            alert('Logged in!')
        })
        .catch((error) => {
            alert(error.message);
        });
}

