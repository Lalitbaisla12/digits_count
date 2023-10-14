const inputField = document.getElementById('inputField');
const digitCount = document.getElementById('digitCount');
const remainingDigits = document.getElementById('remainingDigits');
const maxDigits = 50;

inputField.addEventListener('input', function () {
    const numDigits = inputField.value.length;
    const digitsRemaining = maxDigits - numDigits;

    digitCount.textContent = `Digits entered: ${numDigits}`;
    remainingDigits.textContent = `Remaining digits: ${digitsRemaining < 0 ? 0 : digitsRemaining}`;

    if (numDigits > maxDigits) {
        // Trim excess digits
        inputField.value = inputField.value.slice(0, maxDigits);
        digitCount.textContent = `Digits entered: ${maxDigits}`;
        remainingDigits.textContent = `Remaining digits: 0`;
    }
});




