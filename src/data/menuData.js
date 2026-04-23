export const menuData = {
    food: [
        // Dirty Tacos (3 for $21. Served on fresh local artisan corn tortillas)
        { id: 't1', name: 'Tacos de Mama', price: 21, description: '3 Tacos. 6-hour slow-cooked pulled beef, homemade pico de gallo, pickled onions, mama’s secret garlic sauce. Served on fresh local artisan corn tortillas.', category: 'Dirty Tacos (3 for $21)', image: '/assets/tacos plate.png' },
        { id: 't2', name: 'Mango Shrimp Tacos', price: 21, description: '3 Tacos. Shrimp marinated in fresh mango salsa, homemade pico de gallo, pickled onions, mama’s secret garlic sauce. Served on fresh local artisan corn tortillas.', category: 'Dirty Tacos (3 for $21)', image: '/assets/tacos plate.png' },
        { id: 't3', name: 'Tacos Carnitas', price: 21, description: '3 Tacos. 8-hour slow-cooked pulled pork, homemade pico de gallo, pickled onions, tangy jalapeno salsa. Served on fresh local artisan corn tortillas.', category: 'Dirty Tacos (3 for $21)', image: '/assets/tacos plate.png' },

        // Dirty Grinottes (Appetizers)
        { id: 'a1', name: 'Chips n Guac', price: 13, description: 'Crispy corn tortilla chips, guacamole, homemade pico de gallo.', category: 'Dirty Grinottes (Appetizers)', image: '/assets/plate2.png' },
        { id: 'a2', name: 'Tequeño Cheese Sticks', price: 18, description: "Mama's secret recipe... crispy Venezuelan cheese sticks served with a special green Venezuelan guasacaca sauce.", category: 'Dirty Grinottes (Appetizers)' },

        // Dirty Burger & Dogs (Smashed with two patties and served with fresh fries)
        { id: 'b1', name: 'La Burrata', price: 29, description: '5oz piece of burrata, BBQ sauce, cheddar, caramelized onions, pesto. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', image: '/assets/buratta.png' },
        { id: 'b2', name: 'Le Pig Mac', price: 20.50, description: '4-cheese mac n cheese, 8-hour slow-cooked pulled pork, cheddar cheese, crispy bacon, caramelized onions, BBQ sauce. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', image: '/assets/mackattack.png', has_dog_option: true },
        { id: 'b3', name: 'Le Eastwood', price: 20, description: 'Cheddar, caramelized onions, crispy bacon, BBQ sauce. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', has_dog_option: true },
        { id: 'b4', name: 'Le Hulk', price: 23.50, description: 'Cheddar, bacon, avocado, fried egg, DD secret sauce. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', has_dog_option: true },
        { id: 'b5', name: 'Le Joker', price: 20, description: 'Cheddar cheese, DD secret sauce, ketchup, pickles. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', has_dog_option: true },
        { id: 'b6', name: 'La Ronde', price: 22, description: 'Panko onion ring, cheddar cheese, chipotle mayo, 4-cheese sauce. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs', has_dog_option: true },
        { id: 'b7', name: 'Pollo Loco', price: 23.50, description: 'Homemade fried chicken, chipotle mayo, hot honey sauce, pickles, green onions. Smashed with two patties and served with fresh fries.', category: 'Dirty Burger & Dogs' },

        // Dirty Poutines (All made with fresh fries, cheese curds, and gravy)
        { id: 'p1', name: 'La Burrata', price: 28, combo_price: 22.50, description: '5oz piece of burrata, BBQ sauce, cheddar, caramelized onions, pesto. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines', image: '/assets/plate2.png' },
        { id: 'p2', name: 'Le Pig Mac', price: 22, combo_price: 15, description: '4-cheese mac n cheese, 8-hour slow-cooked pulled pork, cheddar cheese, crispy bacon, caramelized onions, BBQ sauce. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines' },
        { id: 'p3', name: 'Le Mac Attack', price: 21, combo_price: 13, description: '4-cheese mac n cheese, crispy bacon, green onions. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines' },
        { id: 'p4', name: 'Le Eastwood', price: 21, combo_price: 13, description: 'Caramelized onions, crispy bacon, BBQ sauce. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines' },
        { id: 'p5', name: 'Le Hulk', price: 21.50, combo_price: 14, description: 'Cheddar, bacon, avocado, fried egg, and DD secret sauce. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines', image: '/assets/hulkpoutine.png' },
        { id: 'p6', name: 'Mac Poulet 2.0', price: 21, combo_price: 14, description: '4-cheese mac n cheese, fried chicken, hot honey sauce. Made with fresh fries, cheese curds, and gravy.', category: 'Dirty Poutines' },
        { id: 'p7', name: 'Classique', price: 15, combo_price: 9, description: 'The standard fries, curds, and gravy.', category: 'Dirty Poutines' }
    ],
    drinks: [
        // Cocktails
        {
            id: 'c1',
            name: 'Espresso Martinez',
            price: 17,
            description: 'Rich, velvety, and energizing with deep roasted coffee notes and a silky foam finish.',
            ingredients: ['Vodka', 'Kahlúa', 'Fresh Espresso', 'Simple Syrup'],
            type: 'Cocktails',
            is_rush_friendly: true
        },
        {
            id: 'c2',
            name: 'The Don',
            price: 16,
            description: 'A sophisticated harmony of whiskey warmth and exotic passionfruit brightness.',
            ingredients: ['Whiskey', 'Passionfruit Syrup', 'Lemon Juice', 'Simple Syrup'],
            type: 'Cocktails',
            is_rush_friendly: true
        },
        {
            id: 'c3',
            name: "Tony's Mojito",
            price: 15,
            pitcher_price: 35,
            description: 'Ultra-refreshing mint-forward highball with crisp cucumber and zesty lime.',
            ingredients: ['Havana Club Rum', 'Crème de Menthe', 'Passionfruit Syrup', 'Lime Wedges', 'Cucumber Slices'],
            type: 'Cocktails'
        },
        {
            id: 'c4',
            name: '2AM on Ocean Drive',
            price: 15,
            description: 'Vibrant raspberry Margarita with a perfectly balanced sweet-tart profile.',
            ingredients: ['Tequila Blanco', 'Raspberry Purée', 'Lime Juice', 'Simple Syrup'],
            type: 'Cocktails'
        },
        {
            id: 'c5',
            name: 'La Biblioteca',
            price: 15,
            pitcher_price: 35,
            description: 'An aromatic and foamy botanical delight with bright berry and citrus layers.',
            ingredients: ['Ginger Gin', 'Raspberry Purée', 'Lime Juice', 'Simple Syrup'],
            type: 'Cocktails'
        },
        {
            id: 'c6',
            name: 'Hollywood',
            price: 15,
            pitcher_price: 35,
            description: 'Classic party vibes: fruity, smooth, and endlessly sippable.',
            ingredients: ['Malibu Rum', 'Vodka', 'Cranberry Juice', 'Splash Lime'],
            type: 'Cocktails'
        },

        // Sangrias
        {
            id: 'sgr1',
            name: 'Booty Call',
            price: 37,
            description: 'A luscious white sangria bursting with stone fruit sweetness and sparkling sunshine.',
            ingredients: ['White Wine', 'Peach Schnapps', 'Peach Nectar', 'Orange Juice', 'Fresh Fruit'],
            type: 'Sangrias'
        },
        {
            id: 'sgr2',
            name: 'Lychee Life',
            price: 37,
            description: 'Exotic and floral white sangria with delicate lychee notes and a crisp rum backbone.',
            ingredients: ['White Wine', 'Havana Club 3 year Rum', 'Soho Lychee Liqueur', 'Cranberry Juice', 'Fruit & Lychee'],
            type: 'Sangrias'
        },
        {
            id: 'sgr3',
            name: 'Tuluminati',
            price: 37,
            description: 'Bold red sangria with a spirited tequila kick and refreshing citrus complexity.',
            ingredients: ['Red Wine', 'Tequila Blanco', 'Grapefruit Juice', 'Soda', 'Citrus Fruit'],
            type: 'Sangrias'
        },

        // Beer
        { id: 'be1', name: 'Sleeman Clear 2.0', price: 8.5, pitcher_price: 23, description: 'Refreshing light beer with notes of citrus, sweet malt, and a crisp finish.', type: 'Beer', is_rush_friendly: true },
        { id: 'be2', name: 'Pabst Blue Ribbon', price: 8.5, pitcher_price: 23, description: 'Light-bodied lager, refreshingly crisp with balanced malt sweetness and gentle hop bitterness.', type: 'Beer', is_rush_friendly: true },
        { id: 'be3', name: 'Unibroue - NEIPA', price: 9.25, pitcher_price: 25, description: 'Vibrant, hazy IPA with prominent fruity aromas of pineapple, grapefruit, and mango.', type: 'Beer' },
        { id: 'be4', name: 'Unibroue - HIPL', price: 9.25, pitcher_price: 25, description: 'Hazy India Pale Lager featuring notes of citrus, apricot, and pineapple with a smooth finish.', type: 'Beer' },
        { id: 'be5', name: 'Landshark', price: 8.95, pitcher_price: 27, description: 'Island-style lager, light and refreshing with a hint of malty sweetness and clean finish.', type: 'Beer' },
        { id: 'be6', name: '1664 Kronenburg', price: 9.25, pitcher_price: 28, description: 'Crisp wheat beer characterized by citrus notes, exotic fruits, and a touch of coriander.', type: 'Beer' },
        { id: 'be7', name: 'Guinness', price: 9.95, description: 'Rich, smooth stout with roasted notes of coffee and dark chocolate with a velvety mouthfeel.', type: 'Beer' },
        { id: 'be8', name: 'Sapporo', price: 9.95, pitcher_price: 30, description: 'Clean Japanese lager with a balanced malt sweetness and a crisp, bready finish.', type: 'Beer' },

        // Shots
        {
            id: 'sh1',
            name: 'Green Tea',
            price: 5,
            bundle_price: 20,
            bundle_qty: 5,
            description: 'Bright and fruity morning-after cure that tastes just like the tea.',
            ingredients: ['Jameson Whiskey', 'Peach Schnapps', 'Lime Juice'],
            type: 'Shots',
            is_rush_friendly: true
        },
        {
            id: 'sh2',
            name: 'Jalapa Papa',
            price: 5,
            bundle_price: 20,
            bundle_qty: 5,
            description: 'Spicy, zesty kick that wakes up the senses.',
            ingredients: ['Tequila Blanco', 'Lime Juice', 'Fresh Jalapeño'],
            type: 'Shots',
            is_rush_friendly: true
        },
        {
            id: 'sh3',
            name: 'Luv U Long Time',
            price: 5,
            bundle_price: 20,
            bundle_qty: 5,
            description: 'Sweet, floral, and dangerous. A crowd favorite.',
            ingredients: ['Lychee Liqueur', 'Vodka', 'Peach Schnapps'],
            type: 'Shots',
            is_rush_friendly: true
        }
    ],
    combos: [
        {
            id: 'combo1',
            name: 'The Pre-Game',
            items_included: ['Tequila Shot', 'OG Poutine'],
            discount_price: 15
        }
    ]
};
