let arrUser = JSON.parse(localStorage.getItem("userList")) ?? [];
let loginCheck = localStorage.getItem("checkLogin");
function checkLogin(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == loginCheck) {
            let cartProducts = users[i].cart;
            renderCartProducts(cartProducts)
        }
    }
}

function renderCartProducts(cartProductsList) {
    let innerCartProducts = "";
    let innerTotalProducts = 0;
    let innerTotalCost = 0;

    for (let j = 0; j < cartProductsList.length; j++) {
        innerTotalProducts += cartProductsList[j].quantity;
        innerTotalCost += (cartProductsList[j].quantity * cartProductsList[j].price);
        innerCartProducts +=
            `
                    <div class="product_detail">
                        <img class="product_img" src=${cartProductsList[j].image} alt="">
                        <p class="product_name">${cartProductsList[j].name}</p>
                        <p class="product_price">${cartProductsList[j].price} $/each</p>
                        <p class="product_price">quantity:
                        <span onclick="removeProduct(${cartProductsList[j].id})" class="material-symbols-outlined adjust_quantity">
remove
</span>
 ${cartProductsList[j].quantity}
                        <span onclick="addProduct(${cartProductsList[j].id})" class="material-symbols-outlined adjust_quantity">
add
</span></p>
                        <p class="product_price">total price: ${cartProductsList[j].quantity * cartProductsList[j].price} $</p>
                        <div class="product_addtocart" onclick="removeFromCart(${cartProductsList[j].id})">
                            <span>Remove from cart</span>
                            <span class="material-symbols-outlined product_addtocart_icon">
                            delete
                            </span>
                        </div>
                    </div>
                `
        document.getElementById("total_cost").textContent = `Total Cost: ` + innerTotalCost + ` $`
        document.getElementById("total_products").textContent = `Total products: ` + innerTotalProducts + ` pcs`
        document.getElementById("products_list").innerHTML = innerCartProducts;
    }
}
checkLogin(arrUser)

function removeFromCart(id) {
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].id == loginCheck) {
            let cartProducts = arrUser[i].cart;
            for (let j = 0; j < cartProducts.length; j++) {
                if (cartProducts[j].id == id) {
                    cartProducts.splice(j, 1);
                    break;
                }
            }
        }
    }
    localStorage.setItem("userList", JSON.stringify(arrUser));
    checkLogin(arrUser)
}

function toLogin() {
    window.location.href = "./login.html";
}

function hiddenLogoutButton() {
    let loginCheck = localStorage.getItem("checkLogin");
    let logoutButton = document.getElementById("logoutButton")
    if (loginCheck == null) {
        logoutButton.style.display = "none";
    }
    
}
hiddenLogoutButton()

function hiddenLoginButton() {
    let loginCheck = localStorage.getItem("checkLogin");
    let loginButton = document.getElementById("loginButton");
    if (loginCheck != null) {
        loginButton.style.display = "none";
    }
}
hiddenLoginButton()

function logout() {
    localStorage.removeItem("checkLogin")
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("loginButton").style.display = "";
}

function toHome() {
    window.location.href = "./index.html"
}

function toRegister() {
    window.location.href = "./register.html"
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

function addProduct(productId) {
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].id == loginCheck) {
            let cartProducts = arrUser[i].cart;
            for (let j = 0; j < cartProducts.length; j++) {
                if (productId == cartProducts[j].id) {
                    cartProducts[j].quantity += 1;
                    localStorage.setItem("userList", JSON.stringify(arrUser));
                    checkLogin(arrUser)
                    return;
                }
            }
        }
    }
}

function removeProduct(productId) {
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].id == loginCheck) {
            let cartProducts = arrUser[i].cart;
            for (let j = 0; j < cartProducts.length; j++) {
                if (productId == cartProducts[j].id) {
                    if (cartProducts[j].quantity > 1) {
                        cartProducts[j].quantity -= 1;
                        localStorage.setItem("userList", JSON.stringify(arrUser));
                        checkLogin(arrUser)
                        return;
                    } if (cartProducts[j].quantity = 1) {
                        cartProducts.splice(j, 1);
                        localStorage.setItem("userList", JSON.stringify(arrUser));
                        checkLogin(arrUser)
                        return;
                    }
                }
            }
        }
    }
}
function search() {
    let userCart=[];
    for (let i = 0; i < arrUser.length; i++) {
        if(arrUser[i].id==loginCheck){
            userCart=arrUser[i].cart;
        }
    }
    let typeSearch = document.getElementById("header_search_input").value;
    let searchResult = [];
    for (let j = 0; j < userCart.length; j++) {
        if (userCart[j].name.indexOf(typeSearch) != -1) {
            searchResult.push(userCart[j])
        }
    }
    console.log(searchResult);
    renderCartProducts(searchResult)
    if (searchResult==[]) {
        checkLogin(arrUser);
    }
}

