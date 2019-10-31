const firstQuestion = document.querySelector('.select-fuel-type');
const secondQuestion = document.querySelector('.car-commute-input');
const thirdQuestion = document.querySelector('.bus-travel-input');
const forthQuestion = document.querySelector('.subway-travel-input');
const fifthQuestion = document.querySelector('.intercity-travel-input');
const sixthQuestion = document.querySelector('.air-travel-input');

const fields = [
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    forthQuestion,
    fifthQuestion,
    sixthQuestion
];

fields.forEach(element => {
    element.addEventListener('input', (e) => {
        calculateCar(e.target.value);
    });
});

const calculateCar = (liters) => {
    liters = liters * 0.264 * 52;
    console.log(liters);
}