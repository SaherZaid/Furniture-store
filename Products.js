const products = [
    {
        id: 0,
        image: 'UpplandSofa.jpg',
        title: 'Uppland sofa',
        price: 849,
        color: 'Beige',
        rating:4.5,
    },
    {
        id: 1,
        image: 'LinanasSofa.jpg',
        title: 'Linanäs sofa',
        price: 299,
        color: 'Black',
        rating:4.5,
    },
    {
        id: 2,
        image: 'Kivik5Seats.webp',
        title: 'Kivik,5-seats',
        price: 1599,
        color: 'Light grey',
        rating:4.5,
    },
    {
        id: 3,
        image: 'KivikSofa.jpeg',
        title: 'Kivik sofa',
        price: 799,
        color: 'Dark grey',
        rating:4.5,
    },
];

const categories = [...new Set(products.map((item) => item.category))];
let i = 0;
document.getElementById('root').innerHTML = products.map((item, index) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
    <div class='img-box'>
        <img class='images' src='${image}'></img>
    </div>
    <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <div class='button-container'>
            <button onclick='showModal(${index})'>View Details</button>
            <button onclick='addToCart(${index})'>Add to Cart</button>
        </div>
    </div>
</div>`

    );
}).join('');


var cart = [];

function addToCart(index){
    cart.push(products[index]);
    showcart();
}

function removeFromCart(index){
    cart.splice(index,1);
    showcart();
}

let total = 0; 

function showcart() {
    let j = 0;
    total = 0; 
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price; 
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${title}___</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                    "<i class='fas fa-trash' onclick='removeFromCart(" + (j++) + ")'></i></div>"
            );
        }).join('');
        document.getElementById("total").innerHTML = "$ " + total + ".00"; 
    }
}

function showModal(index) {
    const { image, title, price, color, rating } = products[index];
    const modalContent = `
        <div class="modal-header">
            <h2>${title}</h2>
            <span class="close">&times;</span>
        </div>
        <div class="modal-body">
            <img class='modal-image' src='${image}'></img>
            <p><strong>Price:</strong> $ ${price}.00</p>
            <p><strong>Color:</strong> ${color}</p>
            <p><strong>Rating:</strong> ${rating} / 5</p>
        </div>
    `;
    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('modal').style.display = 'block';
}


document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
};


window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};