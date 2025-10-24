// Dinner ideas database organized by cuisine
const dinnerIdeas = {
    'south-indian': [
        {
            name: "Gutti Vankaya Curry",
            emoji: "🍆",
            description: "Stuffed brinjal curry with peanut and sesame paste, a Hyderabadi specialty",
            time: "45 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Pesarattu with Upma",
            emoji: "🥞",
            description: "Green gram dosa with upma filling, perfect protein-rich meal",
            time: "30 mins",
            spice: "Mild"
        },
        {
            name: "Bendakaya Pulusu",
            emoji: "🌶️",
            description: "Tangy okra curry with tamarind and aromatic spices",
            time: "35 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Pappu Charu",
            emoji: "🍲",
            description: "Traditional dal soup with tomatoes and spices, served with rice",
            time: "30 mins",
            spice: "Mild"
        },
        {
            name: "Dondakaya Fry",
            emoji: "🥒",
            description: "Crispy ivy gourd stir fry with aromatic spices",
            time: "25 mins",
            spice: "Medium"
        },
        {
            name: "Tomato Pappu",
            emoji: "🍅",
            description: "Simple dal with tomatoes and ghee tempering",
            time: "25 mins",
            spice: "Mild"
        },
        {
            name: "Avakaya Rice",
            emoji: "🍚",
            description: "Spicy mango pickle mixed rice, a tangy favorite",
            time: "15 mins",
            spice: "Very Spicy"
        },
        {
            name: "Guthi Dondakaya",
            emoji: "🥒",
            description: "Stuffed ivy gourd with coconut and peanut masala",
            time: "40 mins",
            spice: "Medium"
        },
        {
            name: "Alasandalu Vada",
            emoji: "🥘",
            description: "Black-eyed peas curry with spices",
            time: "50 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Dosakaya Pachadi",
            emoji: "🥗",
            description: "Yellow cucumber chutney with yogurt and coconut",
            time: "20 mins",
            spice: "Mild"
        },
        {
            name: "Gongura Pappu",
            emoji: "🌿",
            description: "Sorrel leaves dal with a tangy, unique flavor",
            time: "30 mins",
            spice: "Medium"
        },
        {
            name: "Mysore Masala Dosa",
            emoji: "🥘",
            description: "Crispy dosa with spicy red chutney and potato filling",
            time: "40 mins",
            spice: "Spicy"
        },
        {
            name: "Upma with Coconut Chutney",
            emoji: "🥣",
            description: "Savory semolina dish with vegetables",
            time: "20 mins",
            spice: "Mild"
        },
        {
            name: "Rasam Rice",
            emoji: "🍜",
            description: "Tangy tomato and tamarind soup with rice",
            time: "25 mins",
            spice: "Medium"
        }
    ],
    'north-indian': [
        {
            name: "Paneer Butter Masala",
            emoji: "🧈",
            description: "Creamy cottage cheese in rich tomato gravy",
            time: "35 mins",
            spice: "Mild"
        },
        {
            name: "Dal Makhani",
            emoji: "🫘",
            description: "Black lentils slow-cooked with butter and cream",
            time: "60 mins",
            spice: "Mild"
        },
        {
            name: "Chole Bhature",
            emoji: "🫓",
            description: "Spiced chickpea curry with fluffy fried bread",
            time: "50 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Palak Paneer",
            emoji: "🥬",
            description: "Cottage cheese in smooth spinach gravy",
            time: "30 mins",
            spice: "Mild"
        },
        {
            name: "Aloo Gobi",
            emoji: "🥔",
            description: "Dry potato and cauliflower curry with aromatic spices",
            time: "30 mins",
            spice: "Medium"
        },
        {
            name: "Rajma Chawal",
            emoji: "🍛",
            description: "Red kidney beans curry with rice, pure comfort food",
            time: "45 mins",
            spice: "Medium"
        },
        {
            name: "Shahi Paneer",
            emoji: "👑",
            description: "Royal cottage cheese in creamy cashew gravy",
            time: "40 mins",
            spice: "Mild"
        },
        {
            name: "Kadai Paneer",
            emoji: "🫑",
            description: "Cottage cheese with bell peppers in spicy tomato gravy",
            time: "35 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Malai Kofta",
            emoji: "🥜",
            description: "Fried paneer balls in creamy curry",
            time: "50 mins",
            spice: "Mild"
        },
        {
            name: "Baingan Bharta",
            emoji: "🍆",
            description: "Smoky roasted eggplant mash with spices",
            time: "40 mins",
            spice: "Medium"
        }
    ],
    'biryani': [
        {
            name: "Hyderabadi Veg Biryani",
            emoji: "🍛",
            description: "Aromatic basmati rice layered with spiced vegetables",
            time: "60 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Paneer Biryani",
            emoji: "🧈",
            description: "Fragrant rice with marinated paneer cubes",
            time: "55 mins",
            spice: "Medium"
        },
        {
            name: "Mushroom Biryani",
            emoji: "🍄",
            description: "Earthy mushrooms with aromatic spices and basmati",
            time: "50 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Egg Biryani",
            emoji: "🥚",
            description: "Hard-boiled eggs in fragrant rice with whole spices",
            time: "45 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Soya Chunks Biryani",
            emoji: "🍲",
            description: "Protein-rich soya in aromatic Hyderabadi style biryani",
            time: "50 mins",
            spice: "Medium"
        },
        {
            name: "Dindigul Veg Biryani",
            emoji: "🌶️",
            description: "Tamil Nadu style spicy biryani with small grain rice",
            time: "55 mins",
            spice: "Very Spicy"
        }
    ],
    'italian': [
        {
            name: "Margherita Pizza",
            emoji: "🍕",
            description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
            time: "40 mins",
            spice: "None"
        },
        {
            name: "Pasta Primavera",
            emoji: "🍝",
            description: "Pasta with seasonal vegetables in olive oil and herbs",
            time: "30 mins",
            spice: "None"
        },
        {
            name: "Mushroom Risotto",
            emoji: "🍄",
            description: "Creamy Italian rice with mushrooms and parmesan",
            time: "45 mins",
            spice: "None"
        },
        {
            name: "Caprese Panini",
            emoji: "🥪",
            description: "Grilled sandwich with mozzarella, tomatoes, and pesto",
            time: "15 mins",
            spice: "None"
        },
        {
            name: "Penne Arrabbiata",
            emoji: "🌶️",
            description: "Pasta in spicy tomato sauce with garlic and chili",
            time: "25 mins",
            spice: "Spicy"
        },
        {
            name: "Bruschetta",
            emoji: "🥖",
            description: "Toasted bread with tomatoes, garlic, and olive oil",
            time: "15 mins",
            spice: "None"
        },
        {
            name: "Lasagna",
            emoji: "🧀",
            description: "Layered pasta with vegetables, cheese, and tomato sauce",
            time: "70 mins",
            spice: "None"
        },
        {
            name: "Minestrone Soup",
            emoji: "🍲",
            description: "Hearty vegetable soup with pasta and beans",
            time: "40 mins",
            spice: "None"
        }
    ],
    'mexican': [
        {
            name: "Bean Burrito Bowl",
            emoji: "🌯",
            description: "Black beans, rice, salsa, guacamole, and cheese",
            time: "25 mins",
            spice: "Medium"
        },
        {
            name: "Veggie Quesadilla",
            emoji: "🫓",
            description: "Grilled tortilla with cheese and peppers",
            time: "20 mins",
            spice: "Mild"
        },
        {
            name: "Black Bean Tacos",
            emoji: "🌮",
            description: "Soft tacos with seasoned black beans and toppings",
            time: "25 mins",
            spice: "Medium"
        },
        {
            name: "Veggie Enchiladas",
            emoji: "🫔",
            description: "Rolled tortillas with vegetables in spicy sauce",
            time: "45 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Mexican Rice Bowl",
            emoji: "🍚",
            description: "Cilantro lime rice with beans, corn, and salsa",
            time: "30 mins",
            spice: "Mild"
        },
        {
            name: "Nachos Supreme",
            emoji: "🧀",
            description: "Crispy chips with cheese, beans, and jalapeños",
            time: "20 mins",
            spice: "Medium"
        }
    ],
    'mediterranean': [
        {
            name: "Greek Salad Bowl",
            emoji: "🥗",
            description: "Fresh vegetables with feta cheese, olives, and olive oil",
            time: "15 mins",
            spice: "None"
        },
        {
            name: "Falafel Wrap",
            emoji: "🧆",
            description: "Chickpea fritters with tahini sauce and vegetables",
            time: "30 mins",
            spice: "Mild"
        },
        {
            name: "Shakshuka",
            emoji: "🥚",
            description: "Poached eggs in spiced tomato and pepper sauce",
            time: "25 mins",
            spice: "Medium"
        },
        {
            name: "Hummus Mezze Platter",
            emoji: "🫘",
            description: "Chickpea dip with pita, olives, and vegetables",
            time: "20 mins",
            spice: "Mild"
        },
        {
            name: "Stuffed Bell Peppers",
            emoji: "🫑",
            description: "Peppers filled with rice, vegetables, and herbs",
            time: "50 mins",
            spice: "Mild"
        },
        {
            name: "Halloumi & Veggie Skewers",
            emoji: "🧀",
            description: "Grilled cheese and vegetables with herbs",
            time: "30 mins",
            spice: "None"
        },
        {
            name: "Lentil Soup",
            emoji: "🍜",
            description: "Hearty Mediterranean lentil and vegetable soup",
            time: "35 mins",
            spice: "Mild"
        }
    ],
    'sri-lankan': [
        {
            name: "Dhal Curry",
            emoji: "🥥",
            description: "Red lentils cooked with coconut milk and Sri Lankan spices",
            time: "30 mins",
            spice: "Medium"
        },
        {
            name: "Vegetable Kottu Roti",
            emoji: "🥘",
            description: "Chopped roti stir-fried with vegetables and spices",
            time: "35 mins",
            spice: "Spicy"
        },
        {
            name: "Brinjal Moju",
            emoji: "🍆",
            description: "Sweet and sour eggplant pickle with mustard seeds",
            time: "40 mins",
            spice: "Medium Spicy"
        },
        {
            name: "Coconut Pol Sambol",
            emoji: "🌶️",
            description: "Spicy coconut relish with chili and lime",
            time: "15 mins",
            spice: "Very Spicy"
        },
        {
            name: "String Hopper Curry",
            emoji: "🍜",
            description: "Rice noodles with mixed vegetable curry",
            time: "40 mins",
            spice: "Medium"
        },
        {
            name: "Jackfruit Curry",
            emoji: "🥥",
            description: "Young jackfruit cooked in coconut milk with spices",
            time: "50 mins",
            spice: "Medium Spicy"
        }
    ]
};

// State management
let currentCuisine = null;
let currentDishes = [];
let currentIndex = 0;
let selectedDish = null;

// DOM elements
const cuisineButtons = document.querySelectorAll('.cuisine-btn');
const cardSection = document.getElementById('cardSection');
const selectedDishSection = document.getElementById('selectedDish');
const dishCard = document.getElementById('dishCard');
const skipBtn = document.getElementById('skipBtn');
const chooseBtn = document.getElementById('chooseBtn');
const restartBtn = document.getElementById('restartBtn');
const currentDateEl = document.getElementById('currentDate');

// Initialize
function init() {
    displayDate();
    setupEventListeners();
}

// Display current date
function displayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    currentDateEl.textContent = today;
}

// Setup event listeners
function setupEventListeners() {
    cuisineButtons.forEach(button => {
        button.addEventListener('click', () => handleCuisineSelect(button.dataset.cuisine));
    });

    skipBtn.addEventListener('click', skipDish);
    chooseBtn.addEventListener('click', chooseDish);
    restartBtn.addEventListener('click', restart);
}

// Handle cuisine selection
function handleCuisineSelect(cuisine) {
    if (cuisine === 'surprise') {
        const cuisines = Object.keys(dinnerIdeas);
        currentCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    } else {
        currentCuisine = cuisine;
    }

    currentDishes = shuffleArray([...dinnerIdeas[currentCuisine]]);
    currentIndex = 0;
    
    showCardSection();
    displayDish();
}

// Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Show card section
function showCardSection() {
    document.querySelector('.cuisine-selector').style.display = 'none';
    cardSection.classList.add('active');
    selectedDishSection.classList.remove('active');
}

// Display current dish
function displayDish() {
    if (currentIndex >= currentDishes.length) {
        // All dishes viewed, reshuffle
        currentDishes = shuffleArray(currentDishes);
        currentIndex = 0;
    }

    const dish = currentDishes[currentIndex];
    
    // Remove any animation classes
    dishCard.classList.remove('slide-out-left', 'slide-out-right');
    
    // Force reflow
    void dishCard.offsetWidth;
    
    // Update content
    document.getElementById('dishEmoji').textContent = dish.emoji;
    document.getElementById('dishName').textContent = dish.name;
    document.getElementById('dishDescription').textContent = dish.description;
    document.getElementById('dishTime').textContent = `⏱️ ${dish.time}`;
    document.getElementById('dishSpice').textContent = `🌶️ ${dish.spice}`;
}

// Skip dish
function skipDish() {
    dishCard.classList.add('slide-out-left');
    
    setTimeout(() => {
        currentIndex++;
        displayDish();
    }, 400);
}

// Choose dish
function chooseDish() {
    selectedDish = currentDishes[currentIndex];
    dishCard.classList.add('slide-out-right');
    
    setTimeout(() => {
        showSelectedDish();
    }, 400);
}

// Show selected dish
function showSelectedDish() {
    cardSection.classList.remove('active');
    selectedDishSection.classList.add('active');
    
    const info = document.getElementById('selectedDishInfo');
    info.innerHTML = `
        <div class="dish-emoji">${selectedDish.emoji}</div>
        <h3 class="dish-name">${selectedDish.name}</h3>
        <p class="dish-description">${selectedDish.description}</p>
        <div class="dish-details">
            <span class="detail-item">⏱️ ${selectedDish.time}</span>
            <span class="detail-item">🌶️ ${selectedDish.spice}</span>
        </div>
    `;
}

// Restart selection
function restart() {
    currentCuisine = null;
    currentDishes = [];
    currentIndex = 0;
    selectedDish = null;
    
    document.querySelector('.cuisine-selector').style.display = 'block';
    cardSection.classList.remove('active');
    selectedDishSection.classList.remove('active');
}

// Start the app
init();
