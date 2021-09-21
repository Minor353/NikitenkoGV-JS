/***********1. Составить алгоритм: если введенное число больше 7, то вывести “Привет”***********/

const numMutchResult = document.querySelector('.num-match__result');
const numMutchBtn = document.querySelector('.num-match__btn');
const numMutchInput = document.querySelector('.num-match__input');

const numMatch = function (num) {
    if (numMutchInput.value > 7) {
        numMutchResult.innerHTML = 'Привет';
    } else {
        numMutchResult.innerHTML = 'Пока';
    }
}


numMutchBtn.addEventListener('click', function () {
    numMatch(numMutchInput.innerHTML);
});

numMutchInput.addEventListener('keydown', function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        numMatch(numMutchInput.innerHTML);
    }
});



/***********2. Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"***********/

const nameMutchResult = document.querySelector('.name-match__result');
const nameMutchBtn = document.querySelector('.name-match__btn');
const nameMutchInput = document.querySelector('.name-match__input');

const nameMatch = function (name) {
    if (nameMutchInput.value == 'Вячеслав') {
        nameMutchResult.innerHTML = `Привет ${nameMutchInput.value}`;
    } else {
        nameMutchResult.innerHTML = 'Нет такого имени';
    }
}

nameMutchBtn.addEventListener('click', function () {
    nameMatch(nameMutchInput.innerHTML);
});

nameMutchInput.addEventListener('keydown', function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        nameMatch(nameMutchInput.innerHTML);
    }
});



/*******3. Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3********/

const addNumBtn = document.querySelector('.num-multiples__add-num-btn');
const addNumInput = document.querySelector('.num-multiples__add-num-input');
const myNumArray = document.querySelector('.num-multiples__array-my');
const myArrayBox = [];

const arrayEditedBox = document.querySelector('.num-multiples__array-edited-wrap');
const arrayEditedBtn = document.querySelector('.num-multiples__array-edited-btn');


const addMyArrayNum = function (num) {
    myNumArray.innerHTML = `${myNumArray.innerHTML} ${num},`;
};

addNumBtn.addEventListener('click', function () {
    addMyArrayNum(addNumInput.value);
    myArrayBox.push(addNumInput.value);
});

addNumInput.addEventListener('keydown', function (event) {
    if (event.which == 13 || event.keyCode == 13) {
        addMyArrayNum(addNumInput.value);
        myArrayBox.push(addNumInput.value);
    }
});


arrayEditedBtn.addEventListener('click', function () {
    arrayEditedBox.innerHTML = '';
    for (let i = 0; i < myArrayBox.length; i++) {
        if (myArrayBox[i] % 3 == 0) {
            arrayEditedBox.innerHTML = `${arrayEditedBox.innerHTML} ${myArrayBox[i]},`;
        } else {
            console.log(`${myArrayBox[i]} не кратное трем`);
        }
    }
});


