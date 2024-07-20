document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('text-input');
    const button = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');

    button.addEventListener('click', function() {
        const userInput = input.value.trim();

        if (userInput === '') {
            alert('Please input a value');
            return;
        }

        const processedInput = userInput.toLowerCase().replace(/[\W_]/g, '');
        const reversedInput = processedInput.split('').reverse().join('');

        if (processedInput === reversedInput) {
            resultDiv.textContent = `${userInput} is a palindrome`;
        } else {
            resultDiv.textContent = `${userInput} is not a palindrome`;
        }
    });
});
