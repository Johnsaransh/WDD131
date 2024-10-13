const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');
const gallery = document.querySelector('.gallery');
const closeButton = document.querySelector('.close-viewer');


menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});


function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
handleResize(); 


function viewerTemplate(imagePath, altText) {
    const viewer = document.querySelector('.viewer');
    const viewerImage = viewer.querySelector('img');
    viewerImage.src = imagePath;
    viewerImage.alt = altText;
    viewer.classList.remove('hide');
}

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const imgSrc = event.target.getAttribute('src');
        const imgAlt = event.target.getAttribute('alt');
        viewerTemplate(imgSrc, imgAlt);
    }
}

gallery.addEventListener('click', viewHandler);


function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.classList.add('hide');
}

closeButton.addEventListener('click', closeViewer);


document.querySelector('.viewer').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeViewer();
    }
});
