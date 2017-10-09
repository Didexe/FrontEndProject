export function slideDirection(direction) {
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

