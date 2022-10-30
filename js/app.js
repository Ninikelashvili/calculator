//DOM
const billInput = document.getElementById("billInput");
const percentInput = document.getElementById("percentInput");
const numberOfCount = document.getElementById("numberOfCount");
const total = document.getElementById("total");

//functions
let countNumber = Number(numberOfCount.innerText);
const calculateAmount = () => {
  const bill = Number(billInput.value);

  const percent = Number(percentInput.value) / 100;

  const percentAmount = bill * percent;

  const totalAmount = percentAmount + bill;

  const perCountTotal = totalAmount / countNumber;

  total.innerText = `$ ${perCountTotal.toFixed(2)}`;
};

const increaseCount = () => {
  countNumber++;
  numberOfCount.innerText = countNumber;
  calculateAmount();
};

const decreaseCount = () => {
  if (countNumber <= 1) {
    return;
  }
  countNumber--;
  numberOfCount.innerText = countNumber;
  calculateAmount();
};
