
// machine id -> input value

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;

    return value;
}
//
// machine -> balance

function getBalance() {
    const balanceInput = document.getElementById('balance');
    const balance = balanceInput.innerText;
    return Number(balance);
}


// machine value -> set Balance

function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// machine id > hide all > show id
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const history = document.getElementById('history');

    // hide all of the section
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');

    // remove the hidden class from the id defined element

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}