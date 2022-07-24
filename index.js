let countEl = document.getElementById('count-el');

let sumEl = document.getElementById('sum-el');

let count = 0;

const increment = () => {
  count += 1;
  countEl.textContent = count;
};

const decrement = () => {
  count -= 1;
  countEl.textContent = count;
};

const save = () => {
  let sum = ' - ' + count;
  sumEl.textContent += sum;
};

const reset = () => {
  sumEl.textContent = 'Sum: ' + ' ';
};

const countreset = () => {
  countEl.textContent = 0;
  count = 0;
};
