const websprout = document.getElementById('one');
const websproutPhoto = document.getElementById('websproutPhoto');


const toggleWeb = function () {
    if (websproutPhoto.style.display === 'block') {
        websproutPhoto.style.display = 'none'
    } else {
        websproutPhoto.style.display = 'block'
    }
}

websprout.addEventListener('click', toggleWeb)