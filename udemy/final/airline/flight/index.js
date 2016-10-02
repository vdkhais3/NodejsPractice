var Flight = function () {

    // private properties
    var data = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive: null
    };

    // public methods
    this.fill = function (info) {
        for (var prop in data) {
            if (info[prop] !== 'undfined') {
                data[prop] = info[prop];
            }
        }
    };

    this.triggerDepart = function () {
        data.actualDepart = Date.now();
    };

    this.triggerArrive = function () {
        data.actualArrive = Date.now();
    };

    this.getInformation = function () {
        return data;
    };
};

module.exports = function (info) {
    var instance = new Flight();
    instance.fill(info);

    return instance;
};