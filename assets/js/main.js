document.addEventListener('DOMContentLoaded', function () {
    // Menu Data (shared across pages)
    const menuData = {
        "Sufers": [
            {
                title: "traditional", 
                price: 8000, 
                image: "/assets/img/sofers/1.jpg", 
                description: "traditional and contemporary flavors.", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/3.jpg", 
                description: "", 
                badge: "", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/17.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/5.jpg", 
                description: "", 
                badge: "", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/6.jpg", 
                description: "", 
                badge: "", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/7.jpg", 
                description: "", 
                badge: "", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/8.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/16.jpg", 
                description: "", 
                badge: "", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/sofers/12.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            }
        ],
        "Doors": [
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/1.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/2.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/3.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/4.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/5.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/6.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/7.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/8.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/doors/9.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            }
        ],
        "Luxery": [
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/1.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/2.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/3.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/4.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/5.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/6.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/7.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/8.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/9.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/luxery/10.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            }
        ],

        "Beds": [
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/1.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/2.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/3.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/4.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/5.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/beds/6.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            }
        ],

        "Deco": [
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/deco/1.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/deco/2.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/deco/3.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            },
            {
                title: "", 
                price: 8000, 
                image: "/assets/img/deco/4.jpg", 
                description: "", 
                badge: "Most Popular", 
                combo: 500
            }
        ]
    };

    // Cart Data
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Pagination settings
    const itemsPerPage = 10;

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
            const randomItems = shuffled.slice(0, 5);

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