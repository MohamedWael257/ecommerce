let username = document.getElementById("username")
let password = document.getElementById("password")
let allusers = localStorage.getItem('user');
let users = JSON.parse(allusers);
let login_btn = document.querySelector("#login_btn")
login_btn.addEventListener("click", function (e) {
    users.filter((ele) => {
        if ((ele.username === username.value || ele.email === username.value) && ele.password === password.value) {
            let account = {
                username: ele.username,
                email: ele.email,
                password: ele.password
            }
            localStorage.setItem("account", JSON.stringify(account));
            window.replace("../index.html")
        }
        else if (username.value === "admin" && password.value === "admin") {
            let admin = {
                username: "admin",
                password: "admin"
            }
            localStorage.removeItem("account")
            localStorage.setItem("admin", JSON.stringify(admin));
            window.replace("../index.html")

        }
        // else {
        //     e.preventDefault()
        //     window.replace("../index.html")
        // }
    })

});