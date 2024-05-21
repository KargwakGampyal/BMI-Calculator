 
function calculateBMI() {

    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    console.log(parseFloat(heightInput.value))

    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
     // convert height to meters

     if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        displayResult(bmi);
     } else {
        alert('please enter valid values for weight and height.');
     }
}

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    let category = '';

    if (bmi < 1) {
        category = 'Underweight';
    } else if (bmi < 2) {
        category = 'Normal';
    } else if (bmi < 4) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(4)}. Your BMI
    ${category} category.`;
}   

