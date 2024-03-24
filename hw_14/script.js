window.onload = function(){
    let btnel = document.querySelector('button')
    let loadingEl = document.querySelector('.loading')
 
    function checkName(value){
        // let testUsername =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{4,9}$/;
        let testUsername = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d?).{4,9}$/;
        return testUsername.test(value);
    }

    function checkEmail(value){
        let testEmail =  /^[a-z0-9._-]+@[a-z]{2,5}\.[a-z]{2,3}$/i;
        return testEmail.test(value);
    }

    function checkPhone(value){
        let testPhone =  /^(\+38)?\s?(\(0\d{2}\)|0\d{2})\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;;
        return testPhone.test(value);
    }

    function checkPassword(value){
        let testPass =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
        return testPass.test(value);
    }
    document.querySelector('.form-item').addEventListener('change', function(){
        let usernameel = document.querySelector('input[name="username"]').value;
        let emailel = document.querySelector('input[name="email"]').value;
        let phoneel = document.querySelector('input[name="phone"]').value;
        let passwordel = document.querySelector('input[name="pwd"]').value;
        let repeatpasswordel = document.querySelector('input[name="repeatpwd"]').value;
    
        if (
            checkName(usernameel) &&
            checkEmail(emailel) &&
            checkPhone(phoneel) &&
            checkPassword(passwordel) &&
            passwordel === repeatpasswordel
        ){
            btnel.removeAttribute('disabled');
            btnel.innerHTML = 'Submit';
        } 
        else {
            btnel.setAttribute('disabled', 'disabled');
        }
    })

    btnel.onclick = function(){
        loadingEl.style.display = 'block';
        setTimeout(()=>{
            loadingEl.style.display = 'none';
            alert('Submit was succefful!');
        }, 5000);
    }
}