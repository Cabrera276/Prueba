document.addEventListener('DOMContentLoaded', () => {
    // Variables para almacenar los productos y el total
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const cart = []; // Carrito de productos

    // Función para actualizar el carrito
    function updateCart() {
        // Limpiar el contenedor de productos en el carrito
        cartItemsContainer.innerHTML = '';

        // Recorrer los productos del carrito
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Bs ${item.price}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Calcular el total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `Bs ${total}`;
    }

    // Función para agregar productos al carrito
    function addToCart(productName, productPrice) {
        // Agregar el producto al carrito
        cart.push({ name: productName, price: productPrice });
        updateCart(); // Actualizar el carrito y el total
    }

    // Event listener para los botones "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, productPrice); // Agregar producto al carrito
        });
    });
});
