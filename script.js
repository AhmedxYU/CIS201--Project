const form = document.getElementById("gearForm");
const gameType = document.getElementById("gameType");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (gameType.value === "") {
        result.textContent = "Please choose a game type first.";
    } else if (gameType.value === "shooter") {
        result.textContent = "Try a gaming mouse that fits your grip.";
    } else if (gameType.value === "racing") {
        result.textContent = "Try a racing wheel for steering.";
    }

});

const tipButton = document.getElementById("tipButton");
const buyingTip = document.getElementById("buyingTip");

tipButton.addEventListener("click", function () {
    buyingTip.hidden = !buyingTip.hidden;

    if (buyingTip.hidden) {
        tipButton.textContent = "Show tip";
    } else {
        tipButton.textContent = "Hide tip";
    }
});

const costForm = document.getElementById("costForm");

costForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const price = document.getElementById("price").valueAsNumber;
    const quantity = document.getElementById("quantity").valueAsNumber;
    const total = price * quantity;

    document.getElementById("total").textContent =
        "Total: " + total.toFixed(2) + " SAR";
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    const darkModeOn = document.body.classList.toggle("dark-mode");

    if (darkModeOn) {
        themeButton.textContent = "Turn dark mode off";
    } else {
        themeButton.textContent = "Turn dark mode on";
    }
});
