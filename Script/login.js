document.getElementById('login-btn')
    .addEventListener('click', function () {
        const numberInput = document.getElementById('number-input');
        const number = numberInput.value;

        const pinInput = document.getElementById('pin-input');
        const pin = pinInput.value;


        if (number ==='01908064940' && pin === '1234') {
            alert('Login successful');

            // window.location.replace('/home.html');

            window.location.assign('/home.html');
        }



        // if (number.startsWith('01') && pin.length === 4 && number.length ===11) {
        //     alert('Login successful');

        //     // window.location.replace('/home.html');

        //     window.location.assign('/home.html');
        // }

        // else if (number !== 'number' || pin !=='number' ||number.length !==11 || pin.length !==4){
        //     alert('Required field format is not correct');
        //     return;
        // }

        //
        else{
            alert('login failed');
            return;
        }
    })