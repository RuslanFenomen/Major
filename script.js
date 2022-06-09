// let arrey = [];

const themeBtn = document.querySelector('.theme__btn')
const bodyBg = document.querySelector('body');

themeBtn.onclick = function() {
    bodyBg.classList.toggle('active');
    if ( bodyBg.classList.contains('active') === true ) {
        themeBtn.innerHTML = 'Светлая тема';
    } else {
        themeBtn.innerHTML = 'Темная тема';
    }
}
