const getInputValue = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}



document.getElementById('btn-add').addEventListener('click', function(){
    const product = getInputValue('name-field');
    const quantity = getInputValue('quantity-field');
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity);
    addProductsToDisplay(product, quantity)
})

const getShoppingCartFromLocalStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addProductsToDisplay = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProducts = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity);
        addProductsToDisplay(product, quantity)
    }
}

displayStoredProducts()

const clearAll = () => {
    localStorage.clear()
}