/*var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', { configurable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { set: function() {} }); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', { value: 12 }); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1*/

/*
//define one property
var o = {};

Object.defineProperty(o, 'a', {
    value : '10',
    writable: false,
    enumerable: true
});


//define multi properties
var oM = {};

Object.defineProperties(oM, {
    "property1" : {
        value : "value 1",
        writable: true,
        enumerable: true
    }, 
    "property2" : { 
        value : "value 2",
        writable: true,
        enumerable: false
    }
});

for(var p in o) {
    console.log(p);
}

for (var pr in oM) {
    console.log(pr);
}
*/

/*var o = {};
Object.defineProperty(o, 'a', {
    value : 10,
    configurable : true,
    enumerable: true
});

console.log('before change');
for (var p in o) {
    console.log(p); 
    console.log(o[p]);
}

Object.defineProperty(o, 'a', {
    value: 20
});

console.log('after change');
for (var p in o) {
    console.log(p);
    console.log(o[p]);
}*/

/*var o = {};

Object.defineProperty(o, 'a', {
    value: 20,
    enumerable: true
});

for (var p in o) {
    console.log(p);
}*/

var o = {
    name : 'tung',
    job: 'software developer'
};

Object.defineProperty(o, 'toString', {
    value: function() {
        return this.name + ' ' + this.job;
    },
    writable: true,
    enumerable: true
});

o.toString = function() { return 'hello'};

console.log(o.toString());


var o = {};
var o1 = Object.create(Object.prototype);
var o2 = new Object();


