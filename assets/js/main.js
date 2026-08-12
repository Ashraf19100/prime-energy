
        /* =====================================
           Product Data
        ====================================== */

        const products = [

            {
                id: 1,
                name: "Laptop Pro",
                category: "Electronics",
                price: "$899",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                description: "High performance laptop for work and business."
            },

            {
                id: 2,
                name: "Wireless Headphones",
                category: "Electronics",
                price: "$120",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                description: "Premium wireless headphones with clear sound."
            },

            {
                id: 3,
                name: "Smart Watch",
                category: "Electronics",
                price: "$199",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
                description: "Modern smartwatch with fitness tracking."
            },

            {
                id: 4,
                name: "Smart Phone",
                category: "Electronics",
                price: "$699",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                description: "Latest generation smartphone."
            },


            {
                id: 5,
                name: "Running Shoes",
                category: "Fashion",
                price: "$85",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                description: "Comfortable shoes designed for running."
            },

            {
                id: 6,
                name: "Leather Jacket",
                category: "Fashion",
                price: "$150",
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
                description: "Premium leather jacket for everyday style."
            },

            {
                id: 7,
                name: "Classic Watch",
                category: "Fashion",
                price: "$180",
                image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
                description: "Elegant classic watch."
            },


            {
                id: 8,
                name: "Office Chair",
                category: "Furniture",
                price: "$250",
                image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
                description: "Comfortable ergonomic office chair."
            },

            {
                id: 9,
                name: "Modern Sofa",
                category: "Furniture",
                price: "$850",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
                description: "Modern and comfortable living room sofa."
            },


            {
                id: 10,
                name: "Coffee Table",
                category: "Furniture",
                price: "$220",
                image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
                description: "Minimalist wooden coffee table."
            }

        ];


        /* =====================================
           Get HTML Elements
        ====================================== */

        const categoryNav = document.getElementById("categoryNav");
        const productGrid = document.getElementById("productGrid");
        const categoryTitle = document.getElementById("categoryTitle");


        /* =====================================
           Create Categories
        ====================================== */
         /* =====================================
           Initialize
        ====================================== */

        
        function createCategories() {

            // Get unique categories
            const categories = [
                "All",
                ...new Set(
                    products.map(product => product.category)
                )
            ];


            categories.forEach(category => {

                const button =
                    document.createElement("button");

                button.className = "category-btn";

                button.textContent =
                    category;


                // Make All active initially
                if (category === "All") {
                    button.classList.add("active");
                }


                // Category click
                button.addEventListener("click", function () {

                    // Remove active from all buttons
                    document
                        .querySelectorAll(".category-btn")
                        .forEach(btn => {
                            btn.classList.remove("active");
                        });


                    // Add active to clicked button
                    this.classList.add("active");


                    // Filter products
                    if (category === "All") {

                        displayProducts(products);

                        categoryTitle.textContent =
                            "All Products";

                    } else {

                        const filteredProducts =
                            products.filter(product =>
                                product.category === category
                            );


                        displayProducts(filteredProducts);

                        categoryTitle.textContent =
                            category;
                    }

                });

                console.log('hi');
                categoryNav.appendChild(button);

            });

        }


        /* =====================================
           Display Products
        ====================================== */

        function displayProducts(productList) {

            // Clear existing products
            productGrid.innerHTML = "";


            // No products
            if (productList.length === 0) {

                productGrid.innerHTML = `
                    <div class="no-product">
                        No products found.
                    </div>
                `;

                return;
            }


            // Create product cards
            productList.forEach(product => {

                const card =
                    document.createElement("div");

                card.className =
                    "product-card";


                card.innerHTML = `

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                    >

                    <div class="product-info">

                        <h3 class="product-name">
                            ${product.name}
                        </h3>

                        <p class="product-description">
                            ${product.description}
                        </p>

                        <div class="product-bottom">

                            <span class="product-price">
                                ${product.price}
                            </span>

                            <button
                                class="view-btn"
                                onclick="viewProduct(${product.id})">

                                View

                            </button>

                        </div>

                    </div>

                `;


                productGrid.appendChild(card);

            });

        }


        /* =====================================
           View Product
        ====================================== */

        function viewProduct(productId) {

            const product =
                products.find(
                    product => product.id === productId
                );


            if (product) {

                alert(
                    "Product: " +
                    product.name +
                    "\nPrice: " +
                    product.price
                );

            }

        }

createCategories();

displayProducts(products);
       

