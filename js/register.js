// let input_box = document.querySelectorAll(".input-box")
let input_box = document.querySelectorAll(".input-box input")
let input_error = document.querySelectorAll(".input-box error")

let submit_btn = document.querySelector("#register_btn")

let username = document.getElementById("username")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confpassword = document.getElementById("confpassword")

let erroruser = document.querySelector(".erroruser")
let errorphone = document.querySelector(".errorphone")
let erroremail = document.querySelector(".erroremail")
let errorpassword = document.querySelector(".errorpassword")
let errorconfpassword = document.querySelector(".errorconfpassword")

let passwordstrength = document.querySelector(".strength")

// let users = []
let id = 0;
let users;
if (localStorage.user != null) {
    users = JSON.parse(localStorage.user)
    id = users.length
}
else {
    users = [];
    id = 0
}
submit_btn.addEventListener("click", function (e) {
    validtion();
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let emailw = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let validateUser = username.value !== "" && username.value.length > 6 && username.value.length < 20
    let validateEmail = email.value !== "" && email.value.match(emailw)
    let validatePass = password.value !== "" && password.value.match(passw)
    let validateconfPass = confpassword.value !== "" && confpassword.value === password.value
    let validatePhone = phone.value !== "" && phone.value.length === 11
    const findemail = users.findIndex((obj) => obj.email === email.value)
    const findeusername = users.findIndex((obj) => obj.username === username.value)
    const findephone = users.findIndex((obj) => obj.phone === phone.value)
    if (validateUser && validatePass && validateEmail && validateconfPass && validatePhone && findemail < 0 && findeusername < 0 && findephone < 0) {
        let userUI = {
            id: id,
            username: username.value,
            phone: phone.value,
            email: email.value,
            password: password.value
        }
        id += 1
        users.push(userUI)
        localStorage.setItem('user', JSON.stringify(users))
        console.log(users);
        let account = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem("account", JSON.stringify(account));
        window.replace("../index.html")
    }
    // else {
    //     e.preventDefault()
    //     // email.value = ""
    // }


});
function validtion() {
    validateUsername(username, erroruser)
    validateEmail(email, erroremail)
    validatePhone(phone, errorphone)
    validatePass(password, errorpassword)
    validateconfPass(confpassword, password, errorconfpassword)

}
function validateUsername(inputfield, errorfield) {
    const findeusername = users.findIndex((obj) => obj.username === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your username *";
    }
    else if (inputfield.value.length < 7 || inputfield.value.length > 19) {
        errorfield.innerText = "username must be between 7 and 14 chars *";
        inputfield.value = ''
    }
    else if (findeusername > -1) {
        errorfield.innerText = "this username is already used *";
        inputfield.value = ''
    }
}

function validateEmail(inputfield, errorfield) {
    let emailw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const findemail = users.findIndex((obj) => obj.email === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your email *";
    }
    else if (!inputfield.value.match(emailw)) {
        errorfield.innerText = "not valid email *";
        inputfield.value = ''
    }
    else if (findemail > -1) {
        errorfield.innerText = "this email is already used *";
        inputfield.value = ''
    }
}

function validatePhone(inputfield, errorfield) {
    const findephone = users.findIndex((obj) => obj.phone === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your phone *";
    }
    else if (inputfield.value.length < 11) {
        errorfield.innerText = "not valid phone *";
        inputfield.value = ''
    }
    else if (findephone > -1) {
        errorfield.innerText = "this phone is already used *";
        inputfield.value = ''
    }

}
function validatePass(inputfield, errorfield) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your password *";
    }
    else if (!inputfield.value.match(passw)) {
        errorfield.innerText = "not valid password *";
        inputfield.value = ''

    }

}
function validateconfPass(inputfield, inputfield2, errorfield) {
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your password  *";
    }
    else if (inputfield.value !== inputfield2.value) {
        errorfield.innerText = "not matched password  *";
        inputfield.value = ''
    }
}

password.addEventListener('keyup', function () {

    if (password.value.length === 0) {
        passwordstrength.style.width = '0%'
        passwordstrength.style.backgroundColor = 'unset'
    }
    if (password.value.length > 2) {
        passwordstrength.style.width = '10%'
        passwordstrength.style.backgroundColor = 'red'
    }
    if (password.value.length > 4) {
        passwordstrength.style.width = '20%'
        passwordstrength.style.backgroundColor = 'red'
    }
    if (password.value.length > 6) {
        passwordstrength.style.width = '30%'
        passwordstrength.style.backgroundColor = 'yellow'
    }
    if (password.value.length > 8) {
        passwordstrength.style.width = '40%'
        passwordstrength.style.backgroundColor = 'yellow'
    }
    if (password.value.length > 10) {
        passwordstrength.style.width = '60%'
        passwordstrength.style.backgroundColor = 'green'
    }
    if (password.value.length > 12) {
        passwordstrength.style.width = '80%'
        passwordstrength.style.backgroundColor = 'green'
    }
    if (password.value.length > 14) {
        passwordstrength.style.width = '100%'
        passwordstrength.style.backgroundColor = 'green'

    }

})
input_box.forEach(function (input) {
    input.addEventListener('keyup', function () {
        erroruser.innerText = ""
        erroremail.innerText = ""
        errorphone.innerText = ""
        errorpassword.innerText = ""
        errorconfpassword.innerText = ""
    })

})