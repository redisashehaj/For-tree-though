const firstQuestion = document.querySelector('.select-fuel-type');
const secondQuestion = document.querySelector('.car-commute-input');
const thirdQuestion = document.querySelector('.bus-travel-input');
const forthQuestion = document.querySelector('.subway-travel-input');
const fifthQuestion = document.querySelector('.intercity-travel-input');
const sixthQuestion = document.querySelector('.air-travel-input');
const weeksPerYear = 52;

const calculateDiesel = (liters) => {
    const diesel = 2.7;
    liters = liters * diesel * weeksPerYear;
    return liters;
}

const calculateBioDiesel = (liters) => {
    const biodiesel = 2.5;
    liters = liters * biodiesel * weeksPerYear;
    return liters;
}

const calculateEthanol = (liters) => {
    const ethanol = 1.52;
    liters = liters * ethanol * weeksPerYear;
    return liters;
}

const calculatePetrol = (liters) => {
    const petrol = 2.32;
    liters = liters * petrol * weeksPerYear;
    return liters;
}

const calculateBus = (liters) => {
    const bus = 2.32;
    liters = liters * bus * weeksPerYear;
    return liters;
}

const calculateSubway = (liters) => {
    const subway = 2.32;
    liters = liters * subway * weeksPerYear;
    return liters;
}

const calculateTrain = (liters) => {
    const train = 2.32;
    liters = liters * train * weeksPerYear;
    return liters;
}

const calculateAir = (liters) => {
    const air = 2.32;
    liters = liters * air * weeksPerYear;
    return liters;
}

let a = '';
firstQuestion.addEventListener("change", (e) => {
    a = e.target.value;
});

let second = 0;
secondQuestion.addEventListener("input", (e) => {
    if (a === 'diesel') {
        calculateDiesel(e.target.value);
    }
    if (a === 'biodiesel') {
        calculateBioDiesel(e.target.value);
    }
    if (a === 'ethanol') {
        calculateEthanol(e.target.value);
    }
    if (a === 'petrol') {
        calculatePetrol(e.target.value);
    }
});

let third = 0;
thirdQuestion.addEventListener("input", (e) => {
    third = calculateBus(e.target.value);
});
let forth = 0;
forthQuestion.addEventListener("input", (e) => {
    forth = calculateSubway(e.target.value);
});
let fifth = 0;
fifthQuestion.addEventListener("input", (e) => {
    fifth = calculateTrain(e.target.value);
});
let sixth = 0;
sixthQuestion.addEventListener("input", (e) => {
    sixth = calculateAir(e.target.value);
});

const button = document.querySelector('.submit-button');
button.addEventListener('click', (e) => {
    console.log(total());

});

let totalEmit = 0;
let totalTrees = 0;

const total = () => {
    totalEmit = second + third + forth + fifth + sixth;
    totalTrees = totalEmit / 34.6;
    return totalTrees;
}