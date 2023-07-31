      //create uuid
      function uuid(){
        return Math.floor(Math.random()*9999999999)
    }

    //register
    let arrUser=JSON.parse(localStorage.getItem("userlist"))||[];
    function register(e){
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let passwords = document.getElementById("passwords").value;
    let confirmPasswords = document.getElementById("confirm_passwords").value
    let email = document.getElementById("emailaddress").value;
    let userObj = {
        name:userName,
        password:passwords,
        email:email,
        id:uuid(),
        cart:[],
    }
    for (let i = 0; i < arrUser.length; i++) {
        if(userName==arrUser[i].name){
        alert("Username was already exist!") 
        clear()
        return;
        } 
    }
    if (passwords!=confirmPasswords) {
        alert("Confirm passwords not match!")
        clear()
        return;
    }
    for (let i = 0; i < arrUser.length; i++) {
        if(email==arrUser[i].email){
        alert("Email was already exist!") 
        clear()
        return;
        } 
    }
    clear()
    arrUser.push(userObj)
    localStorage.setItem("userList",JSON.stringify(arrUser));
    window.location.href="./login.html"
    }

    //clear
    function clear(){
        document.getElementById("username").value="";
        document.getElementById("passwords").value="";
        document.getElementById("confirm_passwords").value="";
        document.getElementById("emailaddress").value="";
    }

    function toLogin(){
        window.location.href="./login.html";
    }

    function toCart(){
        let loginCheck = localStorage.getItem("checkLogin");
        if (loginCheck==null) {
            alert("Should login before access cart!")
            window.location.href="./login.html"
        }else{
            window.location.href="./cart.html"
        }
    }

    function toHome(){
        window.location.href="./index.html"
    }