var flight = require('./flight');

var hnhp = {
    number: 111,
    origin: "Ha Noi",
    destination: "Hai Phong"
};

var hh = flight(hnhp);
// also: var hh = new flight(hnhp);
// flight is class
// hh is object

hh.triggerDepart();

console.log(hh.getInfomation());

var ntdn = {
    number: 222,
    origin: "Nha Trang",
    destination: "Da Nang"
};

var nd = flight(ntdn);

console.log(nd.getInfomation());
console.log(hh.getInfomation());