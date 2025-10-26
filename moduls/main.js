import { MathArray } from './mathArray.js';
import { validateInput} from './errorCheck.js'

const str = document.querySelector('.str');

const sumBtn = document.querySelector('.sumBtn');
const sumRes = document.querySelector('.sumRes');

const arephmeticalBtn = document.querySelector('.arephmeticalBtn');
const arephmeticalRes = document.querySelector('.arephmeticalRes');

const evenBtn = document.querySelector('.evenBtn');
const evenRes = document.querySelector('.evenRes');

const biggerBtn = document.querySelector('.biggerBtn');
const biggerRes = document.querySelector('.biggerRes');

const customBtn = document.querySelector('.customBtn');
const customRes = document.querySelector('.customRes');

sumBtn.addEventListener('click', e => {
    e.preventDefault();
     if (!validateInput(str.value)) {
        return;
    }
     const mathArr =  MathArray.fromStr(str.value);
    sumRes.textContent = mathArr.sum();
});

arephmeticalBtn.addEventListener('click', e => {
    e.preventDefault();
     if (!validateInput(str.value)) {
        return;
    }
    const mathArr =  MathArray.fromStr(str.value);
    arephmeticalRes.textContent = mathArr.average();
});

evenBtn.addEventListener('click', e => {
    e.preventDefault();
     if (!validateInput(str.value)) {
        return;
    }
   const mathArr =  MathArray.fromStr(str.value);
    evenRes.textContent = mathArr.even().join(', ');
});

biggerBtn.addEventListener('click', e => {
    e.preventDefault();
     if (!validateInput(str.value)) {
        return;
    }
 const mathArr =  MathArray.fromStr(str.value);
    biggerRes.textContent = mathArr.biggerThan10().join(', ');
});

customBtn.addEventListener('click', e => {
    e.preventDefault();
     if (!validateInput(str.value)) {
        return;
    }
   const mathArr =  MathArray.fromStr(str.value);
    customRes.textContent = mathArr.custom();
});