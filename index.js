let arrProducts = JSON.parse(localStorage.getItem("products")) ?? [];
function renderProducts(productsList) {
    let innerProducts = "";
    for (let i = 0; i < productsList.length; i++) {
        innerProducts +=
            `
                    <div class="product_detail">
                        <img class="product_img" src=${productsList[i].image} alt="">
                        <p class="product_name">${productsList[i].name}</p>
                        <p class="product_price">${productsList[i].price}$</p>
                        <div class="product_addtocart" onclick="addToCart(${productsList[i].id})">
                            <span>Add to cart</span>
                            <span class="material-symbols-outlined product_addtocart_icon">
                            add_shopping_cart
                            </span>
                        </div>
                    </div>
                `
    }
    document.getElementById("products_list").innerHTML = innerProducts;
}
renderProducts(arrProducts)

//searchf
function search() {
    let typeSearch = document.getElementById("header_search_input").value;
    let searchResult = [];
    for (let i = 0; i < arrProducts.length; i++) {
        if (arrProducts[i].name.indexOf(typeSearch) != -1) {
            searchResult.push(arrProducts[i])
        }
    }
    renderProducts(searchResult)
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

function addToCart(productId) {
    let arrUser = JSON.parse(localStorage.getItem("userList")) || [];
    let arrProducts = JSON.parse(localStorage.getItem("products")) ?? [];
    let loginCheck = localStorage.getItem("checkLogin");
    if (loginCheck == null) {
        alert("Should login before add product to cart!")
        return;
    } else {
        for (let i = 0; i < arrUser.length; i++) {
            if (loginCheck == arrUser[i].id) {
                for (let j = 0; j < arrProducts.length; j++) {
                    if (productId == arrProducts[j].id) {
                        let result = arrUser[i].cart.filter((item) => {
                            console.log(arrUser[i]);
                            return item.id == productId;
                        })
                        if (result.length == 0) {
                            arrUser[i].cart.push(arrProducts[j]);
                            localStorage.setItem("userList", JSON.stringify(arrUser));
                            console.log(arrUser[i]);
                            return;
                        }
                        result[0].quantity = ++result[0].quantity;
                        localStorage.setItem("userList", JSON.stringify(arrUser));
                    }
                }
            }
        }
    }
}