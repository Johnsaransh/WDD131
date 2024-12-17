
const products = [
    { id: 1, name: "Cotton Bales", price: "$150/ton", image: "cotton-bales.jpeg" },
    { id: 2, name: "Iron Ore", price: "$200/ton", image: "ironore.jpg" },
    { id: 3, name: "Timber Logs", price: "$100/ton", image: "timberlogs.jpg" },
    { id: 4, name: "Wheat", price: "$50/ton", image: "wheat.jpg" }
];


const displayProducts = () => {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
};


const addToCart = (productName) => {
    alert(`${productName} added to your cart!`);
};


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
});


document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
