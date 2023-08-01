let product_to_cart;
if (localStorage.cart != null) {
    product_to_cart = JSON.parse(localStorage.cart)
}
else {
    product_to_cart = [];
}
localStorage.setItem('cart', JSON.stringify(product_to_cart))
function addtocart(a) {
    const findid = product_to_cart.findIndex((obj) => obj.id === a)
    products.filter(ele => {
        if (ele.id === a) {
            if (findid <= -1) {
                product_to_cart.push(ele)
                localStorage.setItem('cart', JSON.stringify(product_to_cart))
                console.log(product_to_cart);
            }
        }
    })
    // alert(`added to cart`)
}