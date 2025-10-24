// Dinner ideas database
const dinnerIdeas = [
    // Telugu Cuisine
    {
        name: "Gutti Vankaya Curry",
        emoji: "🍆",
        type: "telugu",
        description: "Stuffed brinjal curry with peanut and sesame paste, a Hyderabadi specialty.",
        tags: ["Spicy", "Traditional"],
        time: "45 mins",
        quick: false
    },
    {
        name: "Pesarattu with Upma",
        emoji: "🥞",
        type: "telugu",
        description: "Green gram dosa with upma filling, perfect for a light dinner.",
        tags: ["Protein-rich", "Healthy"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Bendakaya Pulusu",
        emoji: "🌶️",
        type: "telugu",
        description: "Tangy okra curry with tamarind and spices.",
        tags: ["Tangy", "Comfort food"],
        time: "35 mins",
        quick: false
    },
    {
        name: "Pappu Charu",
        emoji: "🍲",
        type: "telugu",
        description: "Traditional dal soup with tomatoes and spices, served with rice.",
        tags: ["Comfort food", "Healthy"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Gutti Dondakaya",
        emoji: "🥒",
        type: "telugu",
        description: "Stuffed ivy gourd with coconut and peanut masala.",
        tags: ["Traditional", "Flavorful"],
        time: "40 mins",
        quick: false
    },
    {
        name: "Alasandalu Vada",
        emoji: "🥘",
        type: "telugu",
        description: "Black-eyed peas curry with spices, perfect with rice or roti.",
        tags: ["Protein-rich", "Hearty"],
        time: "50 mins",
        quick: false
    },
    {
        name: "Tomato Pappu",
        emoji: "🍅",
        type: "telugu",
        description: "Simple dal with tomatoes and ghee tempering.",
        tags: ["Quick", "Comfort food"],
        time: "25 mins",
        quick: true
    },
    {
        name: "Avakaya Rice",
        emoji: "🍚",
        type: "telugu",
        description: "Spicy mango pickle mixed rice, a quick favorite.",
        tags: ["Quick", "Spicy"],
        time: "15 mins",
        quick: true
    },
    {
        name: "Dondakaya Fry",
        emoji: "🥒",
        type: "telugu",
        description: "Crispy ivy gourd stir fry with spices.",
        tags: ["Crispy", "Side dish"],
        time: "25 mins",
        quick: true
    },
    {
        name: "Dosakaya Pachadi",
        emoji: "🥗",
        type: "telugu",
        description: "Yellow cucumber chutney with yogurt and coconut.",
        tags: ["Refreshing", "Traditional"],
        time: "20 mins",
        quick: true
    },
    {
        name: "Paneer Butter Masala",
        emoji: "🧈",
        type: "telugu",
        description: "Creamy cottage cheese in rich tomato gravy.",
        tags: ["Rich", "Creamy"],
        time: "35 mins",
        quick: false
    },
    {
        name: "Veg Biryani",
        emoji: "🍛",
        type: "telugu",
        description: "Aromatic Hyderabadi-style vegetable biryani with raita.",
        tags: ["Festive", "Aromatic"],
        time: "60 mins",
        quick: false
    },

    // Global Cuisine
    {
        name: "Margherita Pizza",
        emoji: "🍕",
        type: "global",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        tags: ["Italian", "Cheese"],
        time: "40 mins",
        quick: false
    },
    {
        name: "Vegetable Stir Fry",
        emoji: "🥢",
        type: "global",
        description: "Asian-style mixed vegetables with soy sauce and ginger.",
        tags: ["Asian", "Healthy"],
        time: "20 mins",
        quick: true
    },
    {
        name: "Greek Salad with Feta",
        emoji: "🥗",
        type: "global",
        description: "Fresh Mediterranean salad with feta cheese, olives, and cucumbers.",
        tags: ["Mediterranean", "Light"],
        time: "15 mins",
        quick: true
    },
    {
        name: "Pasta Primavera",
        emoji: "🍝",
        type: "global",
        description: "Italian pasta with seasonal vegetables in olive oil and herbs.",
        tags: ["Italian", "Colorful"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Mexican Bean Burrito",
        emoji: "🌯",
        type: "global",
        description: "Flour tortilla filled with beans, cheese, salsa, and guacamole.",
        tags: ["Mexican", "Hearty"],
        time: "25 mins",
        quick: true
    },
    {
        name: "Thai Green Curry",
        emoji: "🍜",
        type: "global",
        description: "Creamy coconut curry with vegetables and Thai basil.",
        tags: ["Thai", "Spicy"],
        time: "35 mins",
        quick: false
    },
    {
        name: "Caprese Panini",
        emoji: "🥪",
        type: "global",
        description: "Grilled sandwich with mozzarella, tomatoes, and pesto.",
        tags: ["Italian", "Quick"],
        time: "15 mins",
        quick: true
    },
    {
        name: "Mushroom Risotto",
        emoji: "🍄",
        type: "global",
        description: "Creamy Italian rice dish with mushrooms and parmesan.",
        tags: ["Italian", "Creamy"],
        time: "45 mins",
        quick: false
    },
    {
        name: "Falafel Wrap",
        emoji: "🧆",
        type: "global",
        description: "Middle Eastern chickpea fritters with tahini sauce and veggies.",
        tags: ["Middle Eastern", "Protein-rich"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Veggie Sushi Rolls",
        emoji: "🍣",
        type: "global",
        description: "Japanese rice rolls with cucumber, avocado, and pickled vegetables.",
        tags: ["Japanese", "Light"],
        time: "40 mins",
        quick: false
    },
    {
        name: "Mac and Cheese",
        emoji: "🧀",
        type: "global",
        description: "Creamy American comfort food with multiple cheeses.",
        tags: ["American", "Comfort food"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Vegetable Paella",
        emoji: "🥘",
        type: "global",
        description: "Spanish rice dish with saffron and mixed vegetables.",
        tags: ["Spanish", "Festive"],
        time: "50 mins",
        quick: false
    },
    {
        name: "Bruschetta",
        emoji: "🥖",
        type: "global",
        description: "Italian toasted bread with tomatoes, garlic, and olive oil.",
        tags: ["Italian", "Appetizer"],
        time: "15 mins",
        quick: true
    },
    {
        name: "Vegetable Pad Thai",
        emoji: "🍜",
        type: "global",
        description: "Thai stir-fried noodles with vegetables, peanuts, and tamarind.",
        tags: ["Thai", "Flavorful"],
        time: "30 mins",
        quick: true
    },
    {
        name: "Minestrone Soup",
        emoji: "🍲",
        type: "global",
        description: "Hearty Italian vegetable soup with pasta and beans.",
        tags: ["Italian", "Healthy"],
        time: "40 mins",
        quick: false
    }
];

// DOM elements
const dishesContainer = document.getElementById('dishesContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const randomBtn = document.getElementById('randomBtn');
const randomResult = document.getElementById('randomResult');

let currentFilter = 'all';

// Initialize the app
function init() {
    renderDishes(dinnerIdeas);
    setupEventListeners();
}

// Render dishes
function renderDishes(dishes) {
    dishesContainer.innerHTML = '';
    
    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        dishesContainer.appendChild(dishCard);
    });
}

// Create dish card
function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.dataset.type = dish.type;
    card.dataset.quick = dish.quick;
    
    const tags = dish.tags.map(tag => 
        `<span class="tag ${tag.toLowerCase() === 'quick' ? 'quick' : ''}">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="dish-header">
            <div>
                <h3 class="dish-title">${dish.name}</h3>
                <span class="dish-type ${dish.type}">${dish.type === 'telugu' ? 'Telugu Cuisine' : 'Global Cuisine'}</span>
            </div>
            <span class="dish-emoji">${dish.emoji}</span>
        </div>
        <p class="dish-description">${dish.description}</p>
        <div class="dish-time">⏱️ ${dish.time}</div>
        <div class="dish-tags">${tags}</div>
    `;
    
    return card;
}

// Filter dishes
function filterDishes(filter) {
    currentFilter = filter;
    const cards = document.querySelectorAll('.dish-card');
    
    cards.forEach(card => {
        let show = false;
        
        switch(filter) {
            case 'all':
                show = true;
                break;
            case 'telugu':
                show = card.dataset.type === 'telugu';
                break;
            case 'global':
                show = card.dataset.type === 'global';
                break;
            case 'quick':
                show = card.dataset.quick === 'true';
                break;
        }
        
        if (show) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Get random dish
function getRandomDish() {
    let filteredDishes = dinnerIdeas;
    
    if (currentFilter !== 'all') {
        if (currentFilter === 'quick') {
            filteredDishes = dinnerIdeas.filter(dish => dish.quick);
        } else {
            filteredDishes = dinnerIdeas.filter(dish => dish.type === currentFilter);
        }
    }
    
    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    return filteredDishes[randomIndex];
}

// Display random dish
function displayRandomDish() {
    const dish = getRandomDish();
    
    randomResult.innerHTML = `
        <h3>Tonight's Surprise: ${dish.emoji} ${dish.name}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 10px;">${dish.description}</p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <span class="dish-type ${dish.type}">${dish.type === 'telugu' ? 'Telugu Cuisine' : 'Global Cuisine'}</span>
            <span class="tag">⏱️ ${dish.time}</span>
            ${dish.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    randomResult.classList.add('show');
    
    // Scroll to result
    randomResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterDishes(button.dataset.filter);
        });
    });
    
    // Random button
    randomBtn.addEventListener('click', displayRandomDish);
}

// Start the app
init();
