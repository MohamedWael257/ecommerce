// let body = document.querySelector("body")
// let spin = document.querySelector(".spin")
// let st
// window.onload = function () {
//     let timeparse = 2
//     st = setInterval(function () {
//         timeparse--
//         body.classList.add("show")
//         spin.classList.add("show")
//         if (timeparse == 0) {
//             clearInterval(st)
//             body.classList.remove("show")
//             spin.classList.remove("show")
//         }
//     }, 1000)
// }
let show = document.querySelector(".search input")
let menu = document.querySelector(".search-menu")
let search_menu_a = document.querySelectorAll(".search-menu a")
show.addEventListener("input", function () {
    if (show.value === "") {
        menu.classList.remove("show")
    }
    else {
        menu.classList.add("show")
        filter = show.value.toUpperCase();
        for (i = 0; i < search_menu_a.length; i++) {
            txtValue = search_menu_a[i].textContent || search_menu_a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                search_menu_a[i].style.display = "";
            } else {
                search_menu_a[i].style.display = "none";
            }
        }
    }


})

let hot_deal_carousel1 = document.querySelector("#carouselExampleCaptionss .carousel-inner .one .cards")
let hot_deal_carousel2 = document.querySelector("#carouselExampleCaptionss .carousel-inner .two .cards")
let hot_deal_carousel3 = document.querySelector("#carouselExampleCaptionss .carousel-inner .three .cards")
let hot_deal_carousell1 = document.querySelector("#carouselExampleCaptionsss .carousel-inner .one .cards")
let hot_deal_carousell2 = document.querySelector("#carouselExampleCaptionsss .carousel-inner .two .cards")
let hot_deal_carousell3 = document.querySelector("#carouselExampleCaptionsss .carousel-inner .three .cards")


function drawcarouselUI() {
    let carouselUI = carousel_products.map((item) => {
        return `
        <div class="card addtoproductcart" style="cursor: pointer">
            <img alt="" src="${item.ImageUrl}">
            <p class="text-center title">${item.title}</p>
            <div class="text-center text-warning font-12 mb-2">
                <i class="fa-regular fa-star ms-1"></i>
                <i class="fa-regular fa-star ms-1"></i>
                <i class="fa-regular fa-star ms-1"></i>
                <i class="fa-regular fa-star ms-1"></i>
                <i class="fa-regular fa-star ms-1"></i>
            </div>
            <span class="text-center">
            <span class="text-warning me-4">${item.b_price}</span>
            <span class="text-decoration-line-through">${item.a_price}</span>
            </span>
            <div class="add bg-white">
                <button class="btn btn-dark text-white" onclick="addtocart(${item.id})">add to cart</button>
                 <ion-icon name="location" class="text-dark border border-dark"></ion-icon>
            </div>
        </div>`
    });
    hot_deal_carousel1.innerHTML = carouselUI;
    hot_deal_carousel2.innerHTML = carouselUI;
    hot_deal_carousel3.innerHTML = carouselUI;
    hot_deal_carousell1.innerHTML = carouselUI;
    hot_deal_carousell2.innerHTML = carouselUI;
    hot_deal_carousell3.innerHTML = carouselUI;
}
drawcarouselUI()
// end drawcarouselUI

let hot_deal_items = document.querySelector(".hot-deal .special-items")

function drawitemsUI() {
    special_items.map((item) => {
        hot_deal_items.innerHTML += `
        <div class="item">
            <img src="${item.ImageUrl}" height="100" width="100" alt="">
                <div class="detailofitem">
                    <p style="margin-bottom: -6px;">${item.b_title}</p>
                    <p style="margin-bottom: 5px;">${item.a_title}</p>
                    <span class="text-warning">${item.b_price}</span>
                    <span class="text-decoration-line-through">${item.a_price}</span>
                </div>
        </div>`

    });
}
drawitemsUI();
// end drawitemsUI

let bags_btn = document.querySelector(".lparent .bags")
let Women_watches_btn = document.querySelector(".lparent .womanwatches")
let men_watches_btn = document.querySelector(".lparent .menwatches")
let JEWLLERY_btn = document.querySelector(".lparent .jewllery")
let bags1 = document.querySelector("#carouselExampleCaptionns .carousel-inner .one")
let bags2 = document.querySelector("#carouselExampleCaptionns .carousel-inner .two")
let bags3 = document.querySelector("#carouselExampleCaptionns .carousel-inner .three")

bags_btn.onclick = function () {
    let bagsitemUI = bags_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2" onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                        
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags1.innerHTML = bagsitemUI[0];
    bags2.innerHTML = bagsitemUI[1];
    bags3.innerHTML = bagsitemUI[2];
}
// bagsiems

Women_watches_btn.onclick = function () {
    let WomenitemUI = Women_watches_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2" onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags1.innerHTML = WomenitemUI[0];
    bags2.innerHTML = WomenitemUI[1];
    bags3.innerHTML = WomenitemUI[2];
    // bags4.innerHTML = WomenitemUI[3];
    // bags5.innerHTML = WomenitemUI[4];
}
// Women_watches_item

men_watches_btn.onclick = function () {
    let mensitemUI = men_watches_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})"> 
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags1.innerHTML = mensitemUI[0];
    bags2.innerHTML = mensitemUI[1];
    bags3.innerHTML = mensitemUI[2];

}
// men_watches_item

JEWLLERY_btn.onclick = function () {
    let JEWLLERYitemUI = JEWLLERY_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags1.innerHTML = JEWLLERYitemUI[0];
    bags2.innerHTML = JEWLLERYitemUI[1];
    bags3.innerHTML = JEWLLERYitemUI[2];

}
// JEWLLERY_item

let tshirt_btn = document.querySelector(".lparent .tshirt")
let women_btn = document.querySelector(".lparent .women")
let menclothes_btn = document.querySelector(".lparent .menclothes")
let tops_btn = document.querySelector(".lparent .tops")
let bags4 = document.querySelector("#carouselExampleCaptionnss .carousel-inner .one")
let bags5 = document.querySelector("#carouselExampleCaptionnss .carousel-inner .two")
let bags6 = document.querySelector("#carouselExampleCaptionnss .carousel-inner .three")

tshirt_btn.onclick = function () {
    let tshirtitemUI = tshirt_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags4.innerHTML = tshirtitemUI[0];
    bags5.innerHTML = tshirtitemUI[1];
    bags6.innerHTML = tshirtitemUI[2];

}
// tshirt_item

let Women_item =
    [
        {
            id: 27,
            ImageUrl: "../images/womensdresses1.jpg",
            title: "Ladies Multicolored Dress",
            price: "395.0",
        },
        {
            id: 28,
            ImageUrl: "../images/womensdresses1.jpg",
            title: "Ladies Multicolored Dress",
            price: "395.0",
        },
        {
            id: 29,
            ImageUrl: "../images/womensdresses1.jpg",
            title: "Ladies Multicolored Dress",
            price: "395.0",
        },
    ]
women_btn.onclick = function () {
    let WomenitemUI = Women_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags4.innerHTML = WomenitemUI[0];
    bags5.innerHTML = WomenitemUI[1];
    bags6.innerHTML = WomenitemUI[2];

}
// Women_item


menclothes_btn.onclick = function () {
    let menclothesitemUI = menclothes_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags4.innerHTML = menclothesitemUI[0];
    bags5.innerHTML = menclothesitemUI[1];
    bags6.innerHTML = menclothesitemUI[2];

}
// menclothes_item


tops_btn.onclick = function () {
    let topsitemUI = tops_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags4.innerHTML = topsitemUI[0];
    bags5.innerHTML = topsitemUI[1];
    bags6.innerHTML = topsitemUI[2];

}
// tops_item

let phone_btn = document.querySelector(".lparent .phone")
let laptops_btn = document.querySelector(".lparent .laptops")
let automotive_btn = document.querySelector(".lparent .automotive")
let motorcycle_btn = document.querySelector(".lparent .motorcycle")
let bags7 = document.querySelector("#carouselExampleCaptionnsss .carousel-inner .one")
let bags8 = document.querySelector("#carouselExampleCaptionnsss .carousel-inner .two")
let bags9 = document.querySelector("#carouselExampleCaptionnsss .carousel-inner .three")

phone_btn.onclick = function () {
    let phoneitemUI = phone_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags7.innerHTML = phoneitemUI[0];
    bags8.innerHTML = phoneitemUI[1];
    bags9.innerHTML = phoneitemUI[2];

}
// phone_item


laptops_btn.onclick = function () {
    let laptopsitemUI = laptops_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags7.innerHTML = laptopsitemUI[0];
    bags8.innerHTML = laptopsitemUI[1];
    bags9.innerHTML = laptopsitemUI[2];

}
// laptops_item


automotive_btn.onclick = function () {
    let automotiveitemUI = automotive_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags7.innerHTML = automotiveitemUI[0];
    bags8.innerHTML = automotiveitemUI[1];
    bags9.innerHTML = automotiveitemUI[2];

}
// automotive_item


motorcycle_btn.onclick = function () {
    let motorcycleitemUI = motorcycle_item.map((item) => {
        return `
        <div class=" d-flex justify-content-between">
            <div class="details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span class="text-warning">${item.price}</span>
                <div class="buy-favourite">
                    <span>
                        <button class="btn btn-dark text-white py-2 me-2"onclick="addtocart(${item.id})">
                            <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                to cart
                        </button>
                    </span>
                    <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                            style="border: 1px solid black;"></i></span>
                </div>
            </div>
            <div class="imgg w-50">
                    <img src="${item.ImageUrl}" class="w-100 h-50 mt-4" alt="">
            </div>
        </div>`
    });
    bags7.innerHTML = motorcycleitemUI[0];
    bags8.innerHTML = motorcycleitemUI[1];
    bags9.innerHTML = motorcycleitemUI[2];

}
// motorcycle_item
let cardition = document.querySelector(".feature-items .content")

function drawcarditionUI() {
    let carditionitemUI = feature_items.map((item) => {
        return `
        <div class="cardition">
            <div class="card-img">
                <img src="${item.ImageUrl}" alt="">
            </div>
            <div class="card-details">
                <p>${item.title}</p>
                <div class="star text-warning font-12">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span>
                    <span class="text-warning me-2">${item.b_price}</span>
                    <span class="text-decoration-line-through" style="color: #555454;">${item.a_price}</span>
                </span>
            </div>
            <div class="add bg-white">
                <button class="btn btn-dark text-white" onclick="addtocart(${item.id})">add to cart</button>
                <ion-icon name="location" class="text-dark border border-dark"></ion-icon>
            </div>
        </div>`
    });
    cardition.innerHTML = carditionitemUI;
}
drawcarditionUI();
// feature_items
// let icon = document.querySelector('.drop')
// let iconbtn = document.querySelector('.drop>button')
// let iconmenu = document.querySelector('.drop-menu')
// icon.addEventListener('click', function () {
//     iconmenu.classList.toggle("show")
//     iconbtn.classList.toggle("change")
// })