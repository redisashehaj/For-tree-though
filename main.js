const firstQuestion = document.querySelector('.select-fuel-type');
const secondQuestion = document.querySelector('.car-commute-input');
const thirdQuestion = document.querySelector('.bus-travel-input');
const forthQuestion = document.querySelector('.subway-travel-input');
const fifthQuestion = document.querySelector('.intercity-travel-input');
const sixthQuestion = document.querySelector('.air-travel-input');

firstQuestion.addEventListener("change", (e) => {
    const text = e.target.value;
    console.log(text);
});

secondQuestion.addEventListener("input", (e) => {
    const text = e.target.value;
    console.log(text);
});

thirdQuestion.addEventListener("input", (e) => {
    const text = e.target.value;
    console.log(text);
});

forthQuestion.addEventListener("input", (e) => {
    const text = e.target.value;
    console.log(text);
});

fifthQuestion.addEventListener("input", (e) => {
    const text = e.target.value;
    console.log(text);
});

sixthQuestion.addEventListener("input", (e) => {
    const text = e.target.value;
    console.log(text);
});