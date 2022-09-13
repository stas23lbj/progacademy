const inputPrice = document.querySelector("#price");
const inputDollar = document.querySelector("#dollar");
const btn = document.querySelector(".convert");
const output = document.querySelector(".output");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const userPrice = inputPrice.value;
  const userDollar = inputDollar.value;
  if (userPrice > 0 && userDollar > 0) {
    const result = (userDollar / userPrice / 100).toFixed(6);
    output.textContent = `You can buy ${result} BTC`;
  } else {
    output.textContent = `There has been an error, try again!`;
  }
});
