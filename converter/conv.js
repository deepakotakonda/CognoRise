const rates = {
    USD: { INR: 74.15, EUR: 0.85, GBP: 0.75 },
    EUR: { INR: 87.12, USD: 1.18, GBP: 0.88 },
    GBP: { INR: 99.15, USD: 1.33, EUR: 1.14 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010 }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const result = (amount * rates[fromCurrency][toCurrency]).toFixed(2);

    document.getElementById('result').innerText = 
        `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}
