function fibonacci(num) {
// your code hereif (num === 1) return 0;
    if (num === 1) return 0;

    let a = 0, b = 1, temp;

    for (let i = 3; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
function calculateFibonacci() {
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num) || num <= 0) {
        document.getElementById('result').textContent = "Please enter a valid positive integer.";
    } else {
        const result = fibonacci(num);
        document.getElementById('result').textContent = `The ${num}th Fibonacci number is: ${result}`;
    }
}


module.exports = fibonacci;
