
const li_1 = document.querySelector('.li-1');
const arrow_1 = document.querySelector('.arrow-1');
const question_1 = document.querySelector('.q-1')
const answer_1 = document.querySelector('.answer-1');
var clicked = false;

li_1.addEventListener('click', onClick);
function onClick(e) {
    clicked = !clicked;
    if (clicked) {
        arrow_1.style.transform = 'rotate(180deg)';
        answer_1.style.display = 'block';
        question_1.style.color = 'black';
        question_1.style.fontWeight = '700';
    } else {
        arrow_1.style.transform = 'rotate(0deg)';
        answer_1.style.display = 'none';
        question_1.style.color = 'var(--dark-grayish-blue)';
        question_1.style.fontWeight = '400';
    }
}