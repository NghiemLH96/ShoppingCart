//create uuid
function uuid() {
    return Math.floor(Math.random() * 9999999999)
}

//register
let arrUser = JSON.parse(localStorage.getItem("userlist")) ?? [];
function register(e) {
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
    } else {
        document.getElementById("empty_passwords").style.opacity = "0"
    }

    let confirmPasswords = document.getElementById("confirm_passwords").value
    if (confirmPasswords == "") {
        document.getElementById("empty_confirmpasswords").style.opacity = "1";
    } else {
        document.getElementById("empty_confirmpasswords").style.opacity = "0"
    }

    let email = document.getElementById("emailaddress").value;
    if (email == "") {
        document.getElementById("empty_emailaddress").style.opacity = "1";
        return;
    } else {
        document.getElementById("empty_emailaddress").style.opacity = "0"
    }

    let userObj = {
        name: userName,
        password: passwords,
        email: email,
        id: uuid(),
        cart: [],
    }
    for (let i = 0; i < arrUser.length; i++) {
        if (userName == arrUser[i].name) {
            alert("Username was already exist!")
            clear()
            return;
        }
    }
    if (passwords != confirmPasswords) {
        alert("Confirm passwords not match!")
        clear()
        return;
    }
    for (let i = 0; i < arrUser.length; i++) {
        if (email == arrUser[i].email) {
            alert("Email was already exist!")
            clear()
            return;
        }
    }
    arrUser.push(userObj)
    console.log(arrUser);
    localStorage.setItem("userList", JSON.stringify(arrUser));
    clear();
    /* toLogin() */
}

//clear
function clear() {
    document.getElementById("username").value = "";
    document.getElementById("passwords").value = "";
    document.getElementById("confirm_passwords").value = "";
    document.getElementById("emailaddress").value = "";
}

function toLogin() {
    window.location.href = "./login.html";
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

function toHome() {
    window.location.href = "./index.html"
}