document.getElementById('calculator-button').addEventListener('click', function () {

    const myIncomeInput = document.getElementById('monthly-income');
    const myIncomeAmt = myIncomeInput.value;
    myIncomeInput.value = '';

    // my Expenes area coding in here...........
    const foodCost = document.getElementById('food-cost');
    const foodCostAmount = foodCost.value;
    const foodCostValue = parseFloat(foodCostAmount);
    foodCost.value = '';
    // rant Input field
    const houseRant = document.getElementById('house-rant');
    const houseRantAmount = houseRant.value;
    const houseCost = parseFloat(houseRantAmount);
    houseRant.value = '';
    // console.log(houseRantAmount)
    const clothesCost = document.getElementById('clothes-cost');
    const clotheAmount = clothesCost.value;
    const clothCost = parseFloat(clotheAmount);

    // console.log(clotheAmount)
    clothesCost.value = '';
    const totalCost = foodCostValue + houseCost + clothCost;

    // total Expances sum area...........
    const totalExpanses = document.getElementById('total-expances');
    const previousTotalExp = totalExpanses.innerText;
    const previousExpancesTotal = parseFloat(previousTotalExp);


    totalExpanses.innerText = previousExpancesTotal + totalCost;

    // console.log(expansesTotal)

    const blance = document.getElementById('blance-amount');
    const blanceText = blance.innerText;
    const blanceAmount = parseFloat(blanceText)
    const blanceWithoutSaving = blanceAmount + myIncomeAmt - totalCost;
    blance.innerText = blanceWithoutSaving;

    // console.log(blanceText)
});

// saveing handle event listener
document.getElementById('save-Button').addEventListener('click', function () {
    const saveInputPersantage = document.getElementById('save-input');
    const saveInputPersantageText = saveInputPersantage.value;
    const saveInput = parseFloat(saveInputPersantageText);

    // console.log(saveInputPersantageText);
    const perviousBlance = document.getElementById('blance-amount');
    const previousBlanceAmount = perviousBlance.innerText;
    const previousTotal = parseFloat(previousBlanceAmount);
    const parsentageTotal = previousTotal * saveInput / 100;
    // console.log(parsentageTotal)

    /* 
    money saving codding area.
    */
    const savingTotal = document.getElementById('seving-total');
    const savingTotalText = savingTotal.innerText;
    const finalSaving = parseFloat(savingTotalText);
    savingTotal.innerText = parsentageTotal;

    // remaining blance amount in pocket
    const lastBlance = document.getElementById('blance-amount');
    const updateBlanceText = lastBlance.innerText;
    const updateBlance = parseFloat(updateBlanceText)
    const restAmount = updateBlance - parsentageTotal;
    // console.log(restAmount);
    const remainingBlance = document.getElementById('remaining-amount');
    const remainingBlanceText = remainingBlance.innerText;
    const remainingBlanceTotal = parseFloat(remainingBlanceText);
    const pokectBlance = remainingBlanceTotal + restAmount;
    remainingBlance.innerText = pokectBlance;

});
