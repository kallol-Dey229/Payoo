document.getElementById('add-money-btn')
    .addEventListener('click', function () { 

        // step - 1
        const bankAccount = getValueFromInput('add-money-bank');

        if(bankAccount == 'Select A Bank'){
            alert('Please select a bank');
            return;
        }

//
        // step - 2
        const accNo = getValueFromInput('bank-account-number');

        if(accNo.length != 11){
            alert('Invalid account number');
            return;
        }


        // step - 3
        const amount = getValueFromInput('add-money-amount');

        const newBalance = getBalance() + Number(amount);



        const pin = getValueFromInput('add-money-pin');

        if(pin === '1234'){
            alert(`add money successful from ${bankAccount} at ${new Date()}`);
            setBalance(newBalance);

            // 1. get the history container
            const history = document.getElementById('history-container');

            // 2. create new div
            const newHistory = document.createElement('div');

            // 3. In new div, innerHTML will be added
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
            add money successful from ${bankAccount}, Account no ${accNo} at ${new Date()};
            </div>

            `
            // 4. Append the new Div in the history container 
            history.append(newHistory);
        }
        else{
            alert('Invalid pin');
            return;
        }
    })