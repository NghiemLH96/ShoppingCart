        function renderProducts() {
            let arrProducts = JSON.parse(localStorage.getItem("products")) ?? [];
            let innerProducts = "";
            for (let i = 0; i < arrProducts.length; i++) {
                innerProducts +=
                    `
                    <div class="product_detail">
                        <img class="product_img" src=${arrProducts[i].image} alt="">
                        <p class="product_name">${arrProducts[i].name}</p>
                        <p class="product_price">${arrProducts[i].price}</p>
                        <div class="product_addtocart" onclick="addToCart(${arrProducts[i].id})">
                            <span>Add to cart</span>
                            <span class="material-symbols-outlined product_addtocart_icon">
                            add_shopping_cart
                            </span>
                        </div>
                    </div>
                `
            }
            document.getElementById("products_list").innerHTML = innerProducts;
            console.log(arrProducts);
        }
        renderProducts()