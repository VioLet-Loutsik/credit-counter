let ourOffer = document.querySelector(".ourOffer");
let titleh2 = document.createElement("h2");
ourOffer.appendChild(titleh2);
titleh2.textContent = "Our offer";

let money = document.querySelector("#money");
let moneyShow = document.querySelector(".moneyShow");
let wholeAmount = document.querySelector(".wholeAmount");

console.log(money.value);
// moneyShow.innerHTML = `${money.value} $`; отобразит дефолтное значение, которое указали мы в html
// или дефолтное среднее

money.addEventListener("input", inputMoney);
let percentNum; // объявл перем для того что бы во 2 функции задать еи значение и использовать в 1 функции
function inputMoney() {
  moneyShow.innerHTML = `${money.value}`+' $';
  let numberValue = Number(money.value);
  let resultMoney = Math.ceil(numberValue + (numberValue * percentNum) / 100);
  wholeAmount.innerHTML = resultMoney + ` $`;
}
inputMoney();

let months = document.querySelector("#months");
let periodChose = document.querySelector(".periodChose");
let percent = document.querySelector(".percent");
months.addEventListener("input", inputMonths);
function inputMonths() {
  periodChose.innerHTML = `${months.value} months`;
  let monthsValue = Number(months.value);
  percentNum = percent.value;
  if (monthsValue <= 5) {
    percentNum = 10;
  } else if (monthsValue >= 6 && monthsValue <= 12) {
    percentNum = 9.5;
  } else if (monthsValue >= 13 && monthsValue <= 22) {
    percentNum = 9;
  } else {
    percentNum = 8.5;
  }
  percent.innerHTML = percentNum + ` %`;
  inputMoney(); // вызвали 1 функцию чтобы срабатывал пересчет при движении обоих ползунков
}
inputMonths();
