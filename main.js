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
    biodiesel: 2.5, //kg per CO2
    ethanol: 1.52,
    petrol: 2.32,
}

const transportType = {
    bus: 0.03,
    subway: 0.75,
    train: 0.17, //kg per mile , per km it would be divided by 0.6
    air: 0.10 //the shorter the distance the more CO2 they emit
}

/* Short flights are calculated to be under 300 miles one-way with emissions of 0.254kg CO2e per passenger mile
Medium flights are calculated to be 300-2300 miles one-way, average 1500 miles, with emissions of 0.144 kg CO2e per passenger mile
Long flights are calculated to be > 2300 miles, average 3,000 miles one-way with emissions of 0.169kg CO2e per passenger mile */

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
        return result;
    });
});

const totalCO2 = () => {

}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted........!');
});