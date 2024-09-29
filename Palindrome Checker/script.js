function checkPalindrome() {
    const input = document.getElementById("inputText").value;
    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    const resultDiv = document.getElementById("result");

    if (cleanedInput === reversedInput) {
        resultDiv.textContent = `"${input}" is a palindrome!`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `"${input}" is not a palindrome.`;
        resultDiv.style.color = 'red';
    }
}
