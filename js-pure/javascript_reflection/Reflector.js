var Reflector = function (obj) {
    this.getProperties = function () {
        var properties = [];
        for (var prop in obj) {
            if (typeof obj[prop] != 'function') {
                properties.push(prop);
            }
        }
        return properties;
    };
    this.getAllMethods = function () {
        var methods = [];
        for (var method in obj) {
            if (typeof obj[method] == 'function') {
                methods.push(method);
            }
        }
        return methods;
    };
    this.getOwnMethods = function () {
        var methods = [];
        for (var method in obj) {
            if (typeof obj[method] == 'function' && obj.hasOwnProperty(method)) {
                methods.push(method);
            }
        }
        return methods;
    };
}

