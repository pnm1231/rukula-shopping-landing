const stores = [
    {
        name: 'Nestle',
        image: 'https://cdn.zenegal.store/stores/8/100-nestle-15877122950831.png',
        url: 'https://nestle.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Cereals and Nestea', 'Dairy', 'Maggi', 'Milkmaid', 'Milo', 'Nescafe', 'Nestomalt', 'Nutrition Range']
    },
    {
        name: 'Ambewela Premium Products',
        image: 'https://cdn.zenegal.store/stores/12/100-ambewela-1588150091457.png',
        url: 'https://ambewela.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Fresh Milk', 'Flavoured Milk', 'Non-Fat Milk', 'Fruit Drinks', 'Energy Drinks', 'Yogurts', 'Cheese']
    },
    {
        name: 'Phoenix',
        image: 'https://phoenix.rukulashopping.lk/images/logo.png',
        url: 'https://phoenix.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Waste', 'Storage', 'Laundry', 'Kitchen', 'Clean', 'Furniture', 'Garden'],
    },
    /*{
        name: 'Unilever',
        image: 'https://cdn.zenegal.store/stores/25/100-unilever-15966531824407.png',
        url: 'https://unilever.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Baby Care', 'Deodorants', 'Food & Beverages', 'Hair Care', 'Laundry & Household Care', 'Oral Care', 'Skin Cleansing']
    },*/
    {
        name: 'Zesta Ceylon Tea',
        image: 'https://cdn.zenegal.store/stores/17/100-zesta-ceylon-tea-15890910003682.png',
        url: 'https://zestaceylontea.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Everyday Black Tea', 'Leafy Black Teas', 'Single Estate Black Teas', 'Flavored Black Tea', 'Green Tea', 'Gift Teas', 'White Teas', 'Herbal Wellness Range']
    },
    {
        name: 'Good Look 1',
        image: 'https://cdn.zenegal.store/stores/21/100-good-look-1-15900444225206.png',
        url: 'https://goodlook1.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Handwash & Sanitizer', 'Skincare', 'Haircare', 'Perfumes and Deodorants']
    },
    {
        name: 'Turkey',
        image: 'https://cdn.zenegal.store/stores/16/100-turkey-1589270639471.png',
        url: 'https://turkey.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Basmathi', 'Canned Fish', 'Mustard Cream', 'Noodles', 'Oil', 'Pasta', 'Salt', 'Sauce', 'Soya Meat']
    },
    {
        name: 'Maya & Lalanthi',
        image: 'https://cdn.zenegal.store/stores/30/100-mayas-cakes-16037065235984.png',
        url: 'https://mayascakes.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Cakes']
    },
    {
        name: 'Vintage Teas',
        image: 'https://cdn.zenegal.store/stores/22/100-vintage-teas-15907472666569.png',
        url: 'https://vintageteas.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Black Teas', 'Green Teas', 'Infusions', 'International Teas', 'Morning After Teas', 'Regional Teas']
    },
    {
        name: 'Norfolk Crescent',
        image: 'https://cdn.zenegal.store/stores/3/100-norfolk-crescent-15883183281216.png',
        url: 'https://crescent.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Burgers & Meatballs', 'Cold Foods', 'Kebab', 'Sausages', 'Smoked Delicacies']
    },
    {
        name: 'Ariya',
        image: 'https://cdn.zenegal.store/stores/13/100-ariya-15893608543583.jpg',
        url: 'https://ariya.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Rice', 'Noodles', 'Milk Powder', 'Condiments']
    },
    {
        name: 'ShopVise',
        image: 'https://cdn.zenegal.store/stores/23/400-shopvise-by-rukula-15909154607639.png',
        url: 'https://shopvise.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Electronics', 'Home & Living', 'Kitchenware', 'Computers & Accessories', 'Phones & Accessories', 'Automotive']
    },
    {
        name: 'CatchMe.lk',
        image: 'https://cdn.zenegal.store/stores/5/100-catchme-1587020784364.png',
        url: 'https://catchme.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Chocolates', 'Dates', 'Fruits', 'Snacks']
    },
    {
        name: 'Pepsi',
        image: 'https://cdn.zenegal.store/stores/14/100-pepsi-15890915844901.png',
        url: 'https://pepsi.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Pepsi', 'Sting', 'Mirinda', '7up', 'Ole Cream Soda', 'Evervess', 'Mountain Dew', 'Ole Zingo', 'Aquafina']
    },
    {
        name: 'MD',
        image: 'https://cdn.zenegal.store/stores/10/100-md-15878967306849.png',
        url: 'https://md.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Cakes Powders and Mixes', 'Cordials', 'Fruit Drinks & Nectar', 'Jams', 'Pastes', 'Sambols', 'Chutneys & Pickles', 'Sauces', 'Treacles']
    },
    {
        name: 'Round Island',
        image: 'https://cdn.zenegal.store/stores/1/100-round-island-15865569731261.png',
        url: 'https://roundisland.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Fish Fillet']
    },
    {
        name: 'Ecoclean',
        image: 'https://cdn.zenegal.store/stores/11/400-ecoclean-15883187401198.png',
        url: 'https://ecoclean.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Cleaning Liquids', 'Cleaning Powders']
    },
    {
        name: 'Yummy Goodness',
        image: 'https://cdn.zenegal.store/stores/15/100-yummy-goodness-15915729971038.png',
        url: 'https://yummygoodness.rukulashopping.lk',
        supportedCities: [],
        productCategories: ['Jams', 'Marmalades', 'Chutneys', 'Pickles']
    },
    {
        name: '',
        image: '',
        url: '',
        supportedCities: [],
        productCategories: []
    }
];

export default stores;
