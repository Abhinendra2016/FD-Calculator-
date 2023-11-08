window.onload = () => {
    const calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', calculateFD);
}

function calculateFD() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(tenure)) {
        alert('Please enter valid values.');
        return;
    }

    const interest = (principal * rate * tenure) / 100;
    const totalAmount = principal + interest;

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    document.getElementById('interest-earned').textContent = interest.toFixed(2);
}
