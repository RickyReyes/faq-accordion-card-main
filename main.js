const li_1 = document.querySelector('.li-1');
const li_2 = document.querySelector('.li-2');
const li_3 = document.querySelector('.li-3');
const li_4 = document.querySelector('.li-4');
const li_5 = document.querySelector('.li-5');

const arrow_1 = document.querySelector('.arrow-1');
const arrow_2 = document.querySelector('.arrow-2');
const arrow_3 = document.querySelector('.arrow-3');
const arrow_4 = document.querySelector('.arrow-4');
const arrow_5 = document.querySelector('.arrow-5');

const question_1 = document.querySelector('.q-1');
const question_2 = document.querySelector('.q-2');
const question_3 = document.querySelector('.q-3');
const question_4 = document.querySelector('.q-4');
const question_5 = document.querySelector('.q-5');

const answer_1 = document.querySelector('.answer-1');
const answer_2 = document.querySelector('.answer-2');
const answer_3 = document.querySelector('.answer-3');
const answer_4 = document.querySelector('.answer-4');
const answer_5 = document.querySelector('.answer-5');

var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;

li_1.addEventListener('click', onClick1);
li_2.addEventListener('click', onClick2);
li_3.addEventListener('click', onClick3);
li_4.addEventListener('click', onClick4);
li_5.addEventListener('click', onClick5);

function onClick1(e) {
    clicked1 = !clicked1;
    if (clicked1) {
        arrow_1.style.transform = 'rotate(180deg)';
        answer_1.style.display = 'block';
        answer_1.style.transition = 'all 2s ease';
        void answer_1.offsetHeight
        question_1.style.color = 'black';
        question_1.style.fontWeight = '700';
    } else {
        arrow_1.style.transform = 'rotate(0deg)';
        answer_1.style.display = 'none';
        question_1.style.color = 'var(--dark-grayish-blue)';
        question_1.style.fontWeight = '400';
    }
}

function onClick2(e) {
    clicked2 = !clicked2;
    if (clicked2) {
        arrow_2.style.transform = 'rotate(180deg)';
        answer_2.style.display = 'block';
        void answer_2.offsetHeight
        question_2.style.color = 'black';
        question_2.style.fontWeight = '700';
    } else {
        arrow_2.style.transform = 'rotate(0deg)';
        answer_2.style.display = 'none';
        question_2.style.color = 'var(--dark-grayish-blue)';
        question_2.style.fontWeight = '400';
    }
}

function onClick3(e) {
    clicked3 = !clicked3;
    if (clicked3) {
        arrow_3.style.transform = 'rotate(180deg)';
        answer_3.style.display = 'block';
        void answer_3.offsetHeight
        question_3.style.color = 'black';
        question_3.style.fontWeight = '700';
    } else {
        arrow_3.style.transform = 'rotate(0deg)';
        answer_3.style.display = 'none';
        question_3.style.color = 'var(--dark-grayish-blue)';
        question_3.style.fontWeight = '400';
    }
}

function onClick4(e) {
    clicked4 = !clicked4;
    if (clicked4) {
        arrow_4.style.transform = 'rotate(180deg)';
        answer_4.style.display = 'block';
        void answer_4.offsetHeight
        question_4.style.color = 'black';
        question_4.style.fontWeight = '700';
    } else {
        arrow_4.style.transform = 'rotate(0deg)';
        answer_4.style.display = 'none';
        question_4.style.color = 'var(--dark-grayish-blue)';
        question_4.style.fontWeight = '400';
    }
}

function onClick5(e) {
    clicked5 = !clicked5;
    if (clicked5) {
        arrow_5.style.transform = 'rotate(180deg)';
        answer_5.style.display = 'block';
        void answer_5.offsetHeight
        question_5.style.color = 'black';
        question_5.style.fontWeight = '700';
    } else {
        arrow_5.style.transform = 'rotate(0deg)';
        answer_5.style.display = 'none';
        question_5.style.color = 'var(--dark-grayish-blue)';
        question_5.style.fontWeight = '400';
    }
}