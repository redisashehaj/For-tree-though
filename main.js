const fuelType = document.querySelector('.select-fuel-type');
const secondQuestion = document.querySelector('.car-commute-input');
const thirdQuestion = document.querySelector('.bus-travel-input');
const forthQuestion = document.querySelector('.subway-travel-input');
const fifthQuestion = document.querySelector('.intercity-travel-input');
const sixthQuestion = document.querySelector('.air-travel-input');
const weeksPerYear = 52;

// results
const carResultField = document.querySelector('#car_result');

const fields = [
    thirdQuestion,
    forthQuestion,
    fifthQuestion,
    sixthQuestion
]

const carFuels = {
    diesel: 2.7,
    biodiesel: 2.5,
    ethanol: 1.52,
    petrol: 2.32,
}

const transportType = {
    bus: 2,
    subway: 3,
    train: 4,
    air: 5
}

const calculateCarCO2 = (liters, fuelType) => liters * carFuels[fuelType] * weeksPerYear;

const calculateTransport = (kilometers, transType) => kilometers * transportType[transType] * weeksPerYear;

secondQuestion.addEventListener("input", e => {
    const result = calculateCarCO2(e.target.value, fuelType.value);
    carResultField.value = result + ' CO2';
});

fields.forEach(element => {
    element.addEventListener("input", e => {
        const resultField = document.querySelector(`#${e.target.id}_result`);
        const result = calculateTransport(Number(e.target.value), e.target.id);
        resultField.value = result + ' CO2';
    });
});

const total = () => {

}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted........!');
});