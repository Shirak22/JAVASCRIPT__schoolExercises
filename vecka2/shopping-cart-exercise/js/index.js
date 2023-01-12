//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName('button');
let cartProducts = '';


//
function renderTheCards(){
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function (event) {
            let product = event.target.parentNode.getAttribute('data-product');
            
            //checking if the product is Existing in the array 
            if (!isExist(shoppingCart, product)) {
                shoppingCart.push(product);
            }else {
                toolTip(products[i], product);
                articleWarning(products[i].parentNode);
            }


            updateCart();
            
        });
    }
}


//Function declarations, add code inside {}
function updateCart() {
        listProductsInCart();
        document.getElementById('products').innerHTML = cartProducts;
        document.getElementById('productsInCart').innerHTML = shoppingCart.length;  
        renderDeleteButton();
}

function listProductsInCart() {
    cartProducts = '';
    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += '<li><p data-items = "' + shoppingCart[i] + '"> &#128465; </p><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';

    }

}

renderTheCards();
//<span>&#128465;</span>
document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('hide');
});

function renderDeleteButton(){
    let items = document.querySelectorAll('#products > li');
    if(items !== undefined && items !== null){
        items.forEach((element)=> {
            let figure = element.childNodes[0];
            let text = element.childNodes[0].getAttribute('data-items');
            let htmlCards = document.querySelectorAll('.card');
           figure.addEventListener('click', ()=>{
                deleteListing(shoppingCart,text);
                listProductsInCart();
                updateCart();

            }); 
        }); 
    }
}

// deleting the items from the shop cart
function deleteListing(arr,item){
    if(arr.includes(item)){
        let itemsIndex = arr.indexOf(item); 
        arr.splice(itemsIndex, 1); 
    }
}
//
function isExist(arr,object){
  let obj =  arr.includes(object) ? true : false; 
  return obj; 
}


function toolTip(button, title){
    if(!button.classList.contains('tooltip')){
        let span = document.createElement('span');
        span.classList.add('tooltiptext');
        span.textContent = `'${title}' already Added!`;
        button.classList.add('tooltip');
        button.appendChild(span);
    }
}

function articleWarning(article){
    let exist = article.querySelector('.already_exist');
    if(exist == null){
        let createText = document.createElement('p'); 
        createText.textContent = 'Already exists in the cart! '
        createText.classList.add('already_exist'); 
        article.appendChild(createText); 
    }
}