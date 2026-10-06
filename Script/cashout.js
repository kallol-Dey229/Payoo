document.getElementById('cashout-btn')
    .addEventListener('click', function () {
     // 1. get the agent number and validate

     const cashoutNumber = getValueFromInput('cashout-number');

    if(cashoutNumber.length !== 11){
            alert('Invalid Agent Number');
            return;
        }

     // 2. get the amount, validate and convert to number
     const cashoutAmount = getValueFromInput('cashout-amount');

     //  3. get the current balance, validate and convert to number
        const currentBalance = getBalance();

     // 4. calculate new balance
        const newBalance = currentBalance - Number(cashoutAmount);

        if (newBalance < 0) {
            alert('Invalid Amount');
        }

     // 5. Get the pin and verify
     const pin = getValueFromInput('cashout-pin');

    if(pin === '1234'){
            // 5-1. true:: show an alert > set balance
            alert('cashout successful');
            setBalance(newBalance);



            // 1. get the history container
            const history = document.getElementById('history-container');

            // 2. create new div
            const newHistory = document.createElement('div');

            // 3. In new div, innerHTML will be added
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
            Cash-out ${cashoutAmount} successful to ${cashoutNumber}, at ${new Date()};
            </div>

            `
            // 4. Append the new Div in the history container 
            history.append(newHistory);
        }

        else{
            // 5-2. false:: show an error alert > return
            alert('Invalid pin');
            return;
        }

    })

















// document.getElementById('cashout-btn')
//     .addEventListener('click', function () {
//         // 1. get the agent number and validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;

//         if(cashoutNumber.length !== 11){
//             alert('Invalid Agent Number');
//             return;
//         }

//         // 2. get the amount, validate and convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;

//         // 3. get the current balance, validate and convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;

//         // 4. calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);

//         if (newBalance < 0) {
//             alert('Invalid Amount');
//         }

//         // 5. Get the pin and verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const pin = cashoutPinInput.value;

//         if(pin === '1234'){
//             // 5-1. true:: show an alert > set balance
//             alert('cashout successful');
//             balanceElement.innerText = newBalance;
//         }

//         else{
//             // 5-2. false:: show an error alert > return
//             alert('Invalid pin');
//             return;
//         }

        
//     })