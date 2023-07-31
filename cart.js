let arrUser = JSON.parse(localStorage.getItem("userList")) ?? [];
        let loginCheck = localStorage.getItem("checkLogin");
        function renderCartProducts() {
            for (let i = 0; i < arrUser.length; i++) {
                if(arrUser[i].id==loginCheck){
                    let cartProducts = arrUser[i].cart;
                    let innerCartProducts = "";
                    let innerTotalProducts=0;
                    let innerTotalCost=0;
                    
                    for (let j = 0; j < cartProducts.length; j++) {
                        innerTotalProducts += cartProducts[j].quantity;
                        innerTotalCost += (cartProducts[j].quantity * cartProducts[j].price);
                        innerCartProducts+=
                        `
                    <div class="product_detail">
                        <img class="product_img" src=${cartProducts[j].image} alt="">
                        <p class="product_name">${cartProducts[j].name}</p>
                        <p class="product_price">${cartProducts[j].price} $/each</p>
                        <p class="product_price">quantity: ${cartProducts[j].quantity}</p>
                        <p class="product_price">total price: ${cartProducts[j].quantity * cartProducts[j].price} $</p>
                        <div class="product_addtocart" onclick="removeFromCart(${cartProducts[j].id})">
                            <span>Remove from cart</span>
                            <span class="material-symbols-outlined product_addtocart_icon">
                            delete
                            </span>
                        </div>
                    </div>
                `
                document.getElementById("total_cost").textContent= `Total Cost: ` + innerTotalCost +` $`
                document.getElementById("total_products").textContent= `Total products: ` + innerTotalProducts +` pcs`
                document.getElementById("products_list").innerHTML = innerCartProducts;  
            }
        }
            }
            
        }
        renderCartProducts()

        function removeFromCart(id){
            for (let i = 0; i < arrUser.length; i++) {
                if(arrUser[i].id==loginCheck){
                    let cartProducts = arrUser[i].cart;
                    for (let j = 0; j < cartProducts.length; j++) {
                        if (cartProducts[j].id==id) {
                            cartProducts.splice(j,1);
                            break;
                        }
                    }
                }
            }
            localStorage.setItem("userList", JSON.stringify(arrUser));
            renderCartProducts()
        }
        function toLogin(){
            window.location.href="./login.html";
        }

        function hiddenLogoutButton(){
            let loginCheck = localStorage.getItem("checkLogin");
            let logoutButton =document.getElementById("logoutButton")
            if(loginCheck==null){
                logoutButton.style.display="none";
            }

        }
        hiddenLogoutButton()

        function hiddenLoginButton(){
            let loginCheck = localStorage.getItem("checkLogin");
            let loginButton = document.getElementById("loginButton");
            if(loginCheck!=null){
                loginButton.style.display="none";
            }
        }
        hiddenLoginButton()
        function logout(){
            localStorage.removeItem("checkLogin")
            document.getElementById("logoutButton").style.display="none";
            document.getElementById("loginButton").style.display="";
        }

        function toHome(){
        window.location.href="./index.html"
        }

        function toRegister() {
        window.location.href="./register.html"
        }