export function slideMultimediaImages(direction) {
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
                        // if (allImages[i].className === 'media-item tooltip visible') {
                        //     allImages[i].className = 'media-item tooltip hidden';
                        //     allImages[i+numberOfVisible-len].className = 'media-item tooltip visible'
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
