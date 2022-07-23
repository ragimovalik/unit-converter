const METER_FEET = 3.281;
const LITER_GALLON = 0.264;
const KILO_POUND = 2.204;

const formEl = document.getElementById('form');
const numberInputEl = document.querySelector('input#number');
const resultBoxEl = document.getElementById('result-box');

const data = [
  {
    title: 'Length (Meter/Feet)',
    units: ['meters', 'feet'],
    rate: METER_FEET,
  },
  {
    title: 'Volume (Liters/Gallons)',
    units: ['liters', 'gallons'],
    rate: LITER_GALLON,
  },
  {
    title: 'Mass (Kilogram/Pounds)',
    units: ['kilos', 'pounds'],
    rate: KILO_POUND,
  },
];

const templateFill = (conversionNumber = 0, title, units, rate) => {
  const [first, second] = units;

  const template = `<div class="item">
  <h4 class="item__title">${title}</h4>
  <p class="item__info">${conversionNumber} ${first} = ${(
    +conversionNumber * rate
  ).toFixed(3)} ${second} | 
  ${conversionNumber} ${second} = ${(+conversionNumber / rate).toFixed(
    3,
  )} ${first}</p>
  </div>`;

  return template;
};

const submitHandler = e => {
  e.preventDefault();
  const conversionNumber = numberInputEl.value;
  let res = '';

  data.map(item => {
    let markup = templateFill(
      conversionNumber || 0,
      item.title,
      item.units,
      item.rate,
    );
    return (res += markup);
  });

  return (resultBoxEl.innerHTML = res);
};

formEl.addEventListener('submit', submitHandler);
