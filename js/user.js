let account = document.querySelector(".account")
let logout_btn = document.querySelector(".logout");
let signin = document.querySelector(".signinn")
let signup = document.querySelector(".signupp")

let account_user = localStorage.getItem('account');
let user = JSON.parse(account_user);
if (user) {
    // account.style.marginTop = "-1px";
    account.innerText = `Hello ${user.username}`
    account.style.display = "inline-block"
    logout_btn.style.display = "inline-block"
    signin.style.display = "none"
    signup.style.display = "none"
}
else {
    account.style.display = "none"
    logout_btn.style.display = "none"
    signin.style.display = "inline-block"
    signup.style.display = "inline-block"
}
logout_btn.addEventListener("click", function () {
    localStorage.removeItem("account");
    location.reload()
});
let account_admin = localStorage.getItem('admin');
let user_admin = JSON.parse(account_admin);
if (user_admin) {
    account.style.marginTop = "-1px";
    account.innerText = `Hello Admin`
    logout_btn.style.display = "block"
    logout_btn.classList.remove = "logout"
    logout_btn.innerText = "ProfileAmin"
    signin.style.display = "none"
    signup.style.display = "none"
    localStorage.removeItem('account')
    logout_btn.addEventListener("click", function () {
        console.log("admin");
        // window.open("../chechout.html", '_self')
    });
}
const navbtn = document.querySelector(".hidebtn")
const navshow = document.querySelector("header nav")
navbtn.addEventListener('click', function () {
    navbtn.classList.toggle("hidebtn")
    navshow.classList.toggle("shownav")

})
