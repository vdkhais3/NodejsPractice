module.exports = function (info) {
    
    var values = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDepart: null,
        actualArrive: null
    };

    for (var prop in values) {
        if (info[prop] !== 'undfined') {
            values[prop] = info[prop];
        }
    }

    var functions = {
        triggerDepart: function (params) {
            values.actualDepart = Date.now();
        },
        triggerArrive: function (params) {
            values.actualArrive = Date.now();
        },
        getInfomation: function (params) {
            return values;
        }
    };

    return functions;
};