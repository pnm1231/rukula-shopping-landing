import stores from './stores';

const allCities = {
    66: {"id":66,"state_id":9,"name":"Colombo 1","state":"Western"},
    67: {"id":67,"state_id":9,"name":"Colombo 2","state":"Western"},
    68: {"id":68,"state_id":9,"name":"Colombo 3","state":"Western"},
    69: {"id":69,"state_id":9,"name":"Colombo 4","state":"Western"},
    70: {"id":70,"state_id":9,"name":"Colombo 5","state":"Western"},
    71: {"id":71,"state_id":9,"name":"Colombo 6","state":"Western"},
    72: {"id":72,"state_id":9,"name":"Colombo 7","state":"Western"},
    73: {"id":73,"state_id":9,"name":"Colombo 8","state":"Western"},
    74: {"id":74,"state_id":9,"name":"Colombo 9","state":"Western"},
    75: {"id":75,"state_id":9,"name":"Colombo 10","state":"Western"},
    84: {"id":84,"state_id":9,"name":"Dehiwala","state":"Western"},
    106: {"id":106,"state_id":9,"name":"Ethul Kotte","state":"Western"},
    275: {"id":275,"state_id":9,"name":"Nawala","state":"Western"},
    330: {"id":330,"state_id":9,"name":"Rajagiriya","state":"Western"}
};

let availableCities = {};
stores.map(store => {
    return store.supportedCities.map(cityId => {
        availableCities[cityId] = allCities[cityId]
    })
});

export default availableCities;
