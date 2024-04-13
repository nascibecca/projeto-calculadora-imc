const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, introduza valores válidos para peso e altura.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.remove('normal', 'attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.add('normal');
    } else if (bmi <= 30) {
        description = "Você está com sobrepeso!";
        value.classList.add('attention');
    } else if (bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.add('attention');
    } else if (bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.add('attention');
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
        value.classList.add('attention');
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
