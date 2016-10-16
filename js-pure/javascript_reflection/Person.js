var Person = function() { 
    //defaults
    var _age  =  0,
        _name = 'John Doe';

    this.initialize = function(name, age) {
      _name = _name || name;
      _age  = _age  || age;
    };
    
    if (arguments.length) this.init();
    
    //public properties. no accessors required
    this.phoneNumber = '555-224-5555';
    this.address     = '22 Acacia ave. London, England';
    
    //getters and setters
    this.getName     = function()      { return _name; };
    this.setName     = function (name) { _name = name; };
    
    //public methods
    this.addBirthday = function()      { _age++; };
    this.toString    = function()      { return 'My name is "+_name+" and I am "_age+" years old.'; };
}; 