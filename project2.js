const principalBox = document.getElementById("principal");
const yearlyrateBox = document.getElementById("yearly_rate");
const termBox = document.getElementById("term");
const answerSpan = document.querySelector("span");

const calculate = function(){
    const pValue = Number(principalBox.value);
    const yrValue = Number(yearlyrateBox.value);
    const termValue = Number(termBox.value);

    const monthlyRate = yrValue / 1200;
    const numberOfPayment = termValue * 12;
    const mp = (pValue * monthlyRate) / (1 - (1 + monthlyRate) ** (-numberOfPayment));
    answerSpan.textContent = "" + mp.toFixed(2);
    
}