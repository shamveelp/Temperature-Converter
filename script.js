

const textbox = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const toKelvin = document.getElementById("toKelvin");
const fromKelvin = document.getElementById("fromKelvin");
const result = document.getElementById("result");

let temp;

function Convert() {
    if (toFarenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";

    } else if (toCelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " °C";

    } else if (toKelvin.checked) {
        temp = Number(textbox.value);
        temp = temp + 273.15;
        result.textContent = temp.toFixed(1) + " K";

    } else if (fromKelvin.checked) {
        temp = Number(textbox.value);
        temp = temp - 273.15;
        result.textContent = temp.toFixed(1) + " °C";

    } else {
        result.textContent = `Select a Unit`;
    }
}