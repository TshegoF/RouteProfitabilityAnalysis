// script.js
document.getElementById('routeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fuelCost = parseFloat(document.getElementById('fuelCost').value);
    const tollCost = parseFloat(document.getElementById('tollCost').value);
    const timeCost = parseFloat(document.getElementById('timeCost').value);
    const revenue = parseFloat(document.getElementById('revenue').value);

    // Calculate total cost
    const totalCost = fuelCost + tollCost + (timeCost * 20); // Assume R20 per hour for time cost

    // Calculate profit
    const profit = revenue - totalCost;

    // Show result
    const resultDiv = document.getElementById('result');
    const profitMessage = document.getElementById('profitMessage');

    resultDiv.style.display = 'block';

    if (profit > 0) {
        profitMessage.textContent = `Profit: R${profit.toFixed(2)}. This route is profitable!`;
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.borderColor = '#28a745';
    } else {
        profitMessage.textContent = `Loss: R${Math.abs(profit).toFixed(2)}. Consider finding a more profitable route.`;
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.borderColor = '#dc3545';
    }
});

// Clear form and hide result
document.getElementById('clearBtn').addEventListener('click', function () {
    // Reset the form
    document.getElementById('routeForm').reset();

    // Hide the result section
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
});
