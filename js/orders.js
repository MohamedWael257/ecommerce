let get = localStorage.getItem('orders')
let orders = JSON.parse(get)
let order = document.querySelector(".orders .table tbody")
function showdatacart() {
    let sum = 0
    orders.map((ele, index) => {
        sum += (ele.price * orders.length)
        order.innerHTML += `
        <tr >
            <td>${index}</td>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            <td>${+ele.price}</td>
            <td><img class="tdimg" src=${ele.ImageUrl} /></td>
        </tr>`
    });
    // <td>${order.itemquantity}</td>
    // <td>${+order.price * order.itemquantity}</td>
}
if (orders && orders.length > 0) {
    showdatacart()
    console.log(orders);
}
else {
    order.innerHTML = ``
}
function deletefromcart(a) {
    const objWithIdIndex = orders.findIndex((obj) => obj.id === a)
    orders.splice(objWithIdIndex, 1)
    console.log(orders);
    localStorage.setItem('orders', JSON.stringify(orders))
    order.innerHTML = ''
    showdatacart()
    if (orders.length === 0) {
        window.location.reload()
    }
}