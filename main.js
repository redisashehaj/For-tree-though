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
    biodiesel: 2.5, //CO2/liter
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
    carResultField.value = Math.round(result);
});

fields.forEach(element => {
    element.addEventListener("input", e => {
        const resultField = document.querySelector(`#${e.target.id}_result`);
        const result = calculateTransport(Number(e.target.value), e.target.id);
        resultField.value = Math.round(result);
    });
});

const totalAmountText = document.querySelector('#all-results');
const totalTreesText = document.querySelector('#all-trees');

//javascript constructor which has a method called get(). This will return all the values of input as long as you put the name
const newResult = (formData) => ({
    bus: formData.get('bus'),
    car: formData.get('car'),
    subway: formData.get('subway'),
    train: formData.get('train'),
    air: formData.get('air')
})

const calcCO2 = ({ bus, car, subway, train, air }) => Number(bus) + Number(car) + Number(subway) + Number(train) + Number(air);

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const result = newResult(formData);
    const totalCO2 = calcCO2(result)
    totalAmountText.value = Math.floor(totalCO2) + ' CO2';
    totalTreesText.value = Math.round(totalCO2 / 15.6);
});