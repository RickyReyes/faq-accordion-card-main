const li_1 = document.querySelector('.li-1');
const arrow_1 = document.querySelector('.arrow-1');
li_1.addEventListener('click', onClick);
function onClick(e) {
    arrow_1.style.transform = 'rotate(180deg)';
}


