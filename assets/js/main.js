// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAET6imsxH2gxlOsnby9r76lt3ptLFSOg8",
  authDomain: "webhosting-27629.firebaseapp.com",
  projectId: "webhosting-27629",
  storageBucket: "webhosting-27629.firebasestorage.app",
  messagingSenderId: "779720974377",
  appId: "1:779720974377:web:525ea2f2b26dd155e0bc38",
  measurementId: "G-JS2XYGMZS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



document.addEventListener('DOMContentLoaded', function () {
    // Menu Data (shared across pages)
    const menuData = {
        "Sufers": [
            {
                title: "The Cozy Throne", 
                price: 250000, 
                image: "img/sofers/1.jpg", 
                description: "Sink into regal comfort with this plush sofa chair, where timeless design meets cloud-like cushioning for your ultimate relaxation.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Lounger's Dream", 
                price: 150000, 
                image: "img/sofers/3.jpg", 
                description: "Crafted for the art of unwinding, this sofa chair blends sleek style with irresistible softness—your perfect escape after a long day.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Chic Retreat", 
                price: 200000, 
                image: "img/sofers/17.jpg", 
                description: "Elevate your space with this stunning sofa chair, a fusion of modern elegance and cozy charm that beckons you to sit and stay awhile.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "Title: The Hugging Haven", 
                price: 228000, 
                image: "img/sofers/5.jpg", 
                description: "Wrap yourself in luxury with this sofa chair, designed to cradle you in comfort while adding a touch of sophistication to any room.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Style Seat", 
                price: 78000, 
                image: "img/sofers/6.jpg", 
                description: "Bold lines, plush upholstery, and pure comfort—this sofa chair isn’t just furniture, it’s a statement of effortless cool.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Serenity Spot", 
                price: 88000, 
                image: "img/sofers/7.jpg", 
                description: "Find your calm in this beautifully crafted sofa chair, where every curve and cushion invites peace and relaxation into your home.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Timeless Perch", 
                price: 338000, 
                image: "img/sofers/8.jpg", 
                description: "A classic reimagined—this sofa chair offers enduring design and supreme comfort, making it the heart of your living space.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Plush Escape", 
                price: 90000, 
                image: "img/sofers/16.jpg", 
                description: "Dive into decadence with this sofa chair, where rich fabrics and perfect support turn every seat into a mini vacation.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Modern Nest", 
                price: 8000, 
                image: "img/sofers/12.jpg", 
                description: "Sleek, stylish, and oh-so-comfy—this sofa chair redefines lounging with its contemporary flair and inviting embrace.", 
                badge: "Most Popular", 
                combo: 500
            }
        ],
        "Doors": [
            {
                title: "The Grand Gateway", 
                price: 8000, 
                image: "img/doors/1.jpg", 
                description: "Step into elegance with this stunning door, where bold design meets sturdy craftsmanship to welcome you home in style.", 
                badge: "M", 
                combo: 500
            },
            {
                title: "The Timeless Portal", 
                price: 38000, 
                image: "img/doors/2.jpg", 
                description: "A classic beauty built to last—this door blends enduring charm with solid construction, opening the way to every moment.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Warm Welcome", 
                price: 8000, 
                image: "img/doors/3.jpg", 
                description: "Crafted from rich woods, this door invites you in with its cozy allure and promises lasting strength for years to come.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Modern Threshold", 
                price: 15000, 
                image: "img/doors/4.jpg", 
                description: "Sleek lines and cutting-edge style define this door, offering a chic entry that’s as functional as it is eye-catching.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Bold Barrier", 
                price: 8000, 
                image: "img/doors/5.jpg", 
                description: "Make a statement with this striking door—its unique design and robust build turn every entrance into an event.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Serenity Seal", 
                price: 8000, 
                image: "img/doors/6.jpg", 
                description: "Close out the world with this beautifully crafted door, blending peace of mind with a touch of architectural grace.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Artisan’s Archway", 
                price: 90000, 
                image: "img/doors/7.jpg", 
                description: "Handcrafted details and premium materials make this door a work of art, opening your space to timeless sophistication.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Fortress Frame", 
                price: 84000, 
                image: "img/doors/8.jpg", 
                description: "Strength meets style in this rugged door, designed to protect and impress with its unyielding presence and polish.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Lightkeeper’s Entry", 
                price: 810000, 
                image: "img/doors/9.jpg", 
                description: "Brighten your home with this glass-accented door, where airy design meets solid security for a perfect balance of form and function.", 
                badge: "Most Popular", 
                combo: 500
            }
        ],
        "Luxery": [
            {
                title: "King sit", 
                price: 800000, 
                image: "img/luxery/1.jpg", 
                description: "Soft and confortale", 
                badge: "", 
                combo: 500
            },
            {
                title: "Luxery sit", 
                price: 1000000, 
                image: "img/luxery/2.jpg", 
                description: "Very relaxing at all times", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Lightkeeper’s sit", 
                price: 300000, 
                image: "img/luxery/3.jpg", 
                description: "Dive into decadence with this sofa chair, where rich fabrics and perfect support turn every seat into a mini vacation.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Serenity Seal", 
                price: 80000, 
                image: "img/luxery/4.jpg", 
                description: "Close out the world with this beautifully crafted door, blending peace of mind with a touch of architectural grace.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Fortress Frame", 
                price: 8000, 
                image: "img/luxery/5.jpg", 
                description: "A classic reimagined—this sofa chair offers enduring design and supreme comfort, making it the heart of your living space.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Modern Threshold", 
                price: 8000, 
                image: "img/luxery/6.jpg", 
                description: "A classic reimagined—this sofa chair offers enduring design and supreme comfort, making it the heart of your living space.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Plush Escape", 
                price: 76000, 
                image: "img/luxery/7.jpg", 
                description: "A classic beauty built to last—this door blends enduring charm with solid construction, opening the way to every moment.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The good life", 
                price: 8000, 
                image: "img/luxery/8.jpg", 
                description: "A classic beauty built to last—this door blends enduring charm with solid construction, opening the way to every moment.", 
                badge: "", 
                combo: 500
            },
            {
                title: "The Warm Welcome", 
                price: 73000, 
                image: "img/luxery/9.jpg", 
                description: "Strength meets style in this rugged door, designed to protect and impress with its unyielding presence and polish.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "The Bold Barrier", 
                price: 800000, 
                image: "img/luxery/10.jpg", 
                description: "Strength meets style in this rugged door, designed to protect and impress with its unyielding presence and polish.", 
                badge: "Most Popular", 
                combo: 500
            }
        ],

        "Beds": [
            {
                title: "Sleep Like a baby", 
                price: 8000000, 
                image: "img/beds/1.jpg", 
                description: "Best soft and confortable", 
                badge: "", 
                combo: 500
            },
            {
                title: "Bed", 
                price: 2000000, 
                image: "img/beds/2.jpg", 
                description: "Best soft and confortable", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "Bed", 
                price: 8000, 
                image: "img/beds/3.jpg", 
                description: "Best soft and confortable", 
                badge: "", 
                combo: 500
            },
            {
                title: "bed", 
                price: 823000, 
                image: "img/beds/4.jpg", 
                description: "Best soft and confortable", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "Bed", 
                price: 800560, 
                image: "img/beds/5.jpg", 
                description: "Best soft and confortable", 
                badge: "", 
                combo: 500
            },
            {
                title: "Bed", 
                price: 8000, 
                image: "img/beds/6.jpg", 
                description: "Best soft and confortable", 
                badge: "Most Popular", 
                combo: 500
            }
        ],

        "Deco": [
            {
                title: "Deco", 
                price: 90000, 
                image: "img/deco/1.jpg", 
                description: "Brighten your home with this glass-accented door, where airy design meets solid security for a perfect balance of form and function.", 
                badge: "", 
                combo: 500
            },
            {
                title: "Deco", 
                price: 8022300, 
                image: "img/deco/2.jpg", 
                description: "Brighten your home with this glass-accented door, where airy design meets solid security for a perfect balance of form and function.", 
                badge: "", 
                combo: 500
            },
            {
                title: "Deco", 
                price: 8000, 
                image: "img/deco/3.jpg", 
                description: "Brighten your home with this glass-accented door, where airy design meets solid security for a perfect balance of form and function.", 
                badge: "", 
                combo: 500
            },
            {
                title: "Deco", 
                price: 1000000, 
                image: "img/deco/4.jpg", 
                description: "Brighten your home with this glass-accented door, where airy design meets solid security for a perfect balance of form and function.", 
                badge: "Most Popular", 
                combo: 500
            }
        ]
    };

    // Cart Data
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Pagination settings
    const itemsPerPage = 9;

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburger && navMenu && navOverlay) {
        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                if (navMenu.classList.contains('active')) {
                    const href = link.getAttribute('href');
                    if (href.startsWith('#')) {
                        toggleMenu();
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            setTimeout(() => {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }
                        event.preventDefault();
                    } else {
                        toggleMenu();
                    }
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Update Cart Count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        }
    }

    // Render Home Page Menu (Random Items with Add to Cart)
    const homeMenuGrid = document.getElementById('home-menu-grid');
    if (homeMenuGrid) {
        function renderHomeMenu() {
            // Flatten all menu items into a single array
            const allItems = Object.values(menuData).flat();
            // Shuffle array and pick up to 5 random items
            const shuffled = allItems.sort(() => 0.5 - Math.random());
            const randomItems = shuffled.slice(0, 6);

            homeMenuGrid.innerHTML = '';
            randomItems.forEach(item => {
                homeMenuGrid.innerHTML += `
                    <div class="menu-item">
                        <img src="assets/${item.image}" alt="${item.title}" class="menu-image">
                        <div class="menu-content">
                            ${item.badge ? `<span class="special-badge">${item.badge}</span>` : ''}
                            <h3 class="menu-title">${item.title}</h3>
                            <p class="menu-price">${item.price} FCFA</p>
                            <p class="menu-description">${item.description}</p>
                            ${item.combo ? `<p class="combo-suggestion"></p>` : ''}
                            <button class="add-to-cart" data-title="${item.title}" data-price="${item.price}">Add to Cart</button>
                        </div>
                    </div>
                `;
            });

            // Add event listeners for Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const title = button.dataset.title;
                    const price = parseInt(button.dataset.price);
                    const existingItem = cart.find(item => item.title === title);
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cart.push({ title, price, quantity: 1 });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                });
            });
        }
        renderHomeMenu();
    }

    // Render Menu Page Tabs
    const tabsContainer = document.getElementById('menu-tabs');
    const contentContainer = document.getElementById('menu-content');

    if (tabsContainer && contentContainer) {
        function renderTabs() {
            tabsContainer.innerHTML = '<button class="menu-page-tab active" data-category="All">All</button>';
            Object.keys(menuData).forEach(category => {
                tabsContainer.innerHTML += `<button class="menu-page-tab" data-category="${category}">${category}</button>`;
            });

            const tabs = document.querySelectorAll('.menu-page-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    renderMenu(tab.dataset.category);
                });
            });
        }

        function renderMenu(category) {
            contentContainer.innerHTML = '';

            if (category === 'All') {
                Object.entries(menuData).forEach(([catName, categoryItems]) => {
                    const div = document.createElement('div');
                    div.className = 'menu-page-category';
                    div.innerHTML = `<h2 class="category-title">${catName}</h2>`;
                    const itemsContainer = document.createElement('div');
                    itemsContainer.className = 'menu-page-items';
                    let currentPage = 0;

                    function renderPage() {
                        itemsContainer.innerHTML = '';
                        const start = currentPage * itemsPerPage;
                        const end = start + itemsPerPage;
                        const pageItems = categoryItems.slice(start, end);

                        pageItems.forEach(item => {
                            itemsContainer.innerHTML += `
                                <div class="menu-page-item">
                                    <img src="${item.image}" alt="${item.title}" class="menu-page-item-image">
                                    <div class="menu-page-item-content">
                                        ${item.badge ? `<span class="special-badge">${item.badge}</span>` : ''}
                                        <div class="menu-page-item-header">
                                            <h3 class="menu-page-item-title">${item.title}</h3>
                                            <span class="menu-page-item-price">${item.price} FCFA</span>
                                        </div>
                                        <p class="menu-page-item-description">${item.description}</p>
                                        ${item.tags ? `<div class="menu-page-item-tags">${item.tags.map(tag => `<span class="menu-page-item-tag">${tag}</span>`).join('')}</div>` : ''}
                                        ${item.combo ? `<p class="combo-suggestion"> </p>` : ''}
                                        <button class="add-to-cart" data-title="${item.title}" data-price="${item.price}">Add to Cart</button>
                                    </div>
                                </div>
                            `;
                        });

                        const pagination = document.createElement('div');
                        pagination.className = 'pagination';
                        pagination.innerHTML = `
                            <button class="prev-btn" ${currentPage === 0 ? 'disabled' : ''}>Previous</button>
                            <button class="next-btn" ${end >= categoryItems.length ? 'disabled' : ''}>Next</button>
                        `;
                        div.appendChild(itemsContainer);
                        div.appendChild(pagination);
                    }

                    renderPage();

                    div.querySelector('.prev-btn')?.addEventListener('click', () => {
                        if (currentPage > 0) {
                            currentPage--;
                            renderPage();
                        }
                    });

                    div.querySelector('.next-btn')?.addEventListener('click', () => {
                        if ((currentPage + 1) * itemsPerPage < categoryItems.length) {
                            currentPage++;
                            renderPage();
                        }
                    });

                    contentContainer.appendChild(div);
                });
            } else {
                const itemsToShow = menuData[category];
                if (!itemsToShow) {
                    contentContainer.innerHTML = '<p>No items found for this category.</p>';
                    return;
                }

                const div = document.createElement('div');
                div.className = 'menu-page-category';
                div.innerHTML = `<h2 class="category-title">${category}</h2>`;
                const itemsContainer = document.createElement('div');
                itemsContainer.className = 'menu-page-items';
                let currentPage = 0;

                function renderPage() {
                    itemsContainer.innerHTML = '';
                    const start = currentPage * itemsPerPage;
                    const end = start + itemsPerPage;
                    const pageItems = itemsToShow.slice(start, end);

                    pageItems.forEach(item => {
                        itemsContainer.innerHTML += `
                            <div class="menu-page-item">
                                <img src="${item.image}" alt="${item.title}" class="menu-page-item-image">
                                <div class="menu-page-item-content">
                                    ${item.badge ? `<span class="special-badge">${item.badge}</span>` : ''}
                                    <div class="menu-page-item-header">
                                        <h3 class="menu-page-item-title">${item.title}</h3>
                                        <span class="menu-page-item-price">${item.price} FCFA</span>
                                    </div>
                                    <p class="menu-page-item-description">${item.description}</p>
                                    ${item.tags ? `<div class="menu-page-item-tags">${item.tags.map(tag => `<span class="menu-page-item-tag">${tag}</span>`).join('')}</div>` : ''}
                                    ${item.combo ? `<p class="combo-suggestion"></p>` : ''}
                                    <button class="add-to-cart" data-title="${item.title}" data-price="${item.price}">Add to Cart</button>
                                </div>
                            </div>
                        `;
                    });

                    const pagination = document.createElement('div');
                    pagination.className = 'pagination';
                    pagination.innerHTML = `
                        <button class="prev-btn" ${currentPage === 0 ? 'disabled' : ''}>Previous</button>
                        <button class="next-btn" ${end >= itemsToShow.length ? 'disabled' : ''}>Next</button>
                    `;
                    div.appendChild(itemsContainer);
                    div.appendChild(pagination);
                }

                renderPage();

                div.querySelector('.prev-btn')?.addEventListener('click', () => {
                    if (currentPage > 0) {
                        currentPage--;
                        renderPage();
                    }
                });

                div.querySelector('.next-btn')?.addEventListener('click', () => {
                    if ((currentPage + 1) * itemsPerPage < itemsToShow.length) {
                        currentPage++;
                        renderPage();
                    }
                });

                contentContainer.appendChild(div);
            }

            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const title = button.dataset.title;
                    const price = parseInt(button.dataset.price);
                    const existingItem = cart.find(item => item.title === title);
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cart.push({ title, price, quantity: 1 });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                });
            });
        }

        renderTabs();
        renderMenu('All');
    }

    // Render Cart Page
    const cartSection = document.querySelector('.cart-section');
    if (cartSection) {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        if (!cartItemsContainer || !cartTotalElement) {
            console.error('Cart elements #cart-items or #cart-total not found.');
            return;
        }

        function renderCart() {
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cart.forEach((item, index) => {
                    cartItemsContainer.innerHTML += `
                        <div class="cart-item">
                            <h3>${item.title}</h3>
                            <p>Price: ${item.price} FCFA</p>
                            <div class="quantity-controls">
                                <button class="decrease" data-index="${index}">-</button>
                                <span>${item.quantity}</span>
                                <button class="increase" data-index="${index}">+</button>
                            </div>
                            <button class="remove" data-index="${index}">Remove</button>
                        </div>
                    `;
                });
            }

            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            cartTotalElement.textContent = `${total} FCFA`;

            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', () => {
                    const index = parseInt(button.dataset.index);
                    if (cart[index].quantity > 1) {
                        cart[index].quantity--;
                    } else {
                        cart.splice(index, 1);
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                    updateCartCount();
                });
            });

            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', () => {
                    const index = parseInt(button.dataset.index);
                    cart[index].quantity++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                    updateCartCount();
                });
            });

            document.querySelectorAll('.remove').forEach(button => {
                button.addEventListener('click', () => {
                    const index = parseInt(button.dataset.index);
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                    updateCartCount();
                });
            });
        }

        renderCart();
    }

    updateCartCount();
});