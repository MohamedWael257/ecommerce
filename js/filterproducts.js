let productsc = document.querySelector(".aproducts");
let filterdata = document.querySelector('.filter>h6')
let get = localStorage.getItem('cart')
let cart = JSON.parse(get)
// let products;
// fetch("../json/products.json")
//     .then(res => res.json())
//     .then((productsdata) => showinfo(productsdata))
// function showinfo(data) {
//     // console.log(data.products);
//     products = data.products
//     console.log(products);
// }

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
shuffleproducts = shuffle(products)
// console.log(shuffleproducts);

function displayproduct() {
    products.map(ele => {
        if (ele.id < 40) {
            productsc.innerHTML += `
    <div class="product-card">
    <div class="card-img">
                <img src="${ele.ImageUrl}" alt="">
     </div>
            <div class="card-details">
                <p class="text-center">${ele.title}</p>

                    <span class="text-dark me-2">${ele.price} EGB</span>
                </span>
            </div>
            <div class="addtocart">
                <i class="fa-solid fa-cart-shopping" onclick="addtocart(${ele.id})"></i>
                <i aria-hidden="true" class="fa fa-heart i-heart"></i>
                <i aria-hidden="true" class="fa fa-search" tabindex="0"></i>
            </div>
            </div>
    `}
    })
}
displayproduct()
let search = document.querySelector('.click')
let select = document.querySelector('.form-select')
select.addEventListener("change", function filter(e) {
    let arr = [];
    if (e.target.value !== '') {
        // console.log(arr);
        products.filter((ele) => {
            if (e.target.value === ele.category) {
                arr.push(ele)
                productsc.innerHTML = ``
            }
        })
        filterdata.innerText = `All ${e.target.value}`
        arr.map((ele) => {
            productsc.innerHTML += `
                <div class="product-card">
                <div class="card-img">
                            <img src="${ele.ImageUrl}" alt="">
                 </div>
                        <div class="card-details">
                            <p class="text-center">${ele.description}</p>
                            <div class="star text-warning font-12 ">
                                <i class="fa-solid fa-star "></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <span>
                                <span class="text-dark me-2">${ele.price} EGB</span>
                            </span>
                        </div>
                        <div class="addtocart">
                        <i class="fa-solid fa-cart-shopping" onclick="addtocart(${ele.id})"></i>
                        <i aria-hidden="true" class="fa fa-heart i-heart"></i>
                        <i aria-hidden="true" class="fa fa-search" tabindex="0"></i>
                    </div>
                        </div>
                `})
    }
    else {
        filterdata.innerText = `All Products`
        productsc.innerHTML = ``
        displayproduct()
    }
})
