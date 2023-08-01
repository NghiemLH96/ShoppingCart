//Login
let arrUser = JSON.parse(localStorage.getItem("userList")) ?? [];
function login(e) {
    e.preventDefault();
    let userName = document.getElementById("username").value;
    if (userName == "") {
        document.getElementById("empty_username").style.opacity = "1";
    } else {
        document.getElementById("empty_username").style.opacity = "0"
    }
    let passwords = document.getElementById("passwords").value;
    if (passwords == "") {
        document.getElementById("empty_passwords").style.opacity = "1";
        return;
    } else {
        document.getElementById("empty_passwords").style.opacity = "0"
    }
    for (let i = 0; i < arrUser.length; i++) {
        if (userName == arrUser[i].name && passwords == arrUser[i].password) {
            localStorage.setItem("checkLogin", arrUser[i].id)
            window.location.href = "./index.html"
            return;
        } else {
            alert("Username or passwords incorrect!")
            return;
        }
    }
}

function clear() {
    document.getElementById("username").value = "";
    document.getElementById("passwords").value = "";
}

function toHome() {
    window.location.href = "./index.html"
}

function toCart() {
    let loginCheck = localStorage.getItem("checkLogin");
    if (loginCheck == null) {
        alert("Should login before access cart!")
        window.location.href = "./login.html"
    } else {
        window.location.href = "./cart.html"
    }
}

function toRegister() {
    window.location.href = "./register.html"
}