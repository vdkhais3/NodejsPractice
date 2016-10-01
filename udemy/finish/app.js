var flight = require('./flight');

flight.setOrigin('Ha Noi');
flight.setDestination('Sai Gon');
flight.setNumber(111);

console.log(flight.getInfo());


var anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());