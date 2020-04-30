// strict comparison
    // === is true when operands are of the same type and the content match
    // !== check for inequality of values not in the same type

// standard comparison
    // == convert operands to the same type before making the comparison
    // != check for inequality of values not in the same type

    console.log(1 == 1);    // true
    console.log('1' == 1);  // true
    
    console.log(1 === 1);   // true
    console.log('1' === 1); // false
    console.log();
    // equality operators
    // equality (==)
    // The equality operator converts the operands if they are not of the same type,
    // then applies strict comparison.
    // If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.
    
    // Syntax
        //  x == y
    
    console.log(1 == 1);    // true
    console.log('1' == 1);  // true
    console.log(1 == '1');  // true
    console.log();
    
    console.log(0 == false);    // true
    console.log(0 == null); // false
    console.log();
    
    var object1 = {'key': 'value', 'property1': 'same value'}, object2 = {'key': 'value', 'property2': 'same value'};
    console.log(object1 == object2); // false
    console.log(object1.key == object2.key); // true because the value of the property is the same
    console.log(object1.property1 == object2.property2); // again true, because the value is the same
    console.log();
    
    console.log(0 == undefined); // false
    console.log(null == undefined); // true
    console.log();
    
    // Inequality (!=)
        //  The inequality operator returns true if the operands are not equal.
        // If the two operands are not of the same type, JavaScript attempts to convert the operands to an appropriate type for the comparison.
        // If both operands are objects, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.
    
    // Syntax
        // x != y
    
    console.log(1 != 2); // true
    console.log(1 != '1'); // false
    console.log(1 != "1"); // false
    console.log(1 != true); // false
    console.log(0 != false); // false
    console.log();
    
    console.log(object1 != object2); // true
    console.log(object1.key != object2.key); // false
    console.log();
    
    // Identity / strict equality (===)
        // The identity operator returns true if the operands are strictly equal
            // with no type conversion
    
    // Syntax
        // x === y
    
    console.log(3 === 3); // true
    console.log(3 === '3'); // false
    console.log(object1 === object2); // false
    console.log();
    
    // Non-identity / strict inequality (!==)
        // The non-identity operator returns true if the operands are
        // not equal and/or not of the same type.
    
    // Syntax
        // x !== y
    
    console.log(3 !== '3'); // true
    console.log(4 !== 3); // true
    console.log();
    // when type conversion (i.e. non-strict comparison), == or !=
    // JS converts String, Number, Boolean, or Object as follows:
    
    // Number and string = string is converted to number
    console.log(1 == "1"); // true 
    console.log("1" != 1); // false
    
    // if one of the operands is Boolean,
    // true convert to 1,
    // false to +0
    console.log(1 == true); // true
    console.log(0 == false); // true
    console.log();
    
    // If an object is compared with a number or string,
    // JavaScript attempts to return the default value for the object
    
    // Operators attempt to convert the object to a primitive value, a String or Number value
    // using the valueOf and toString methods of the objects.
    // If this attempt to convert the object fails, a runtime error is generated.
    
    // Note that an object is converted into a primitive if, and only if, its comparand is a primitive.
    // If both operands are objects, they're compared as objects, and the equality test is true only if both refer the same object.
    
    // Note: String objects are Type Object, not String!
    // String objects are rarely used, so the following results might be surprising:
    
    // true as both operands are type String (i.e. string primitives):
    'foo' === 'foo'
    
    var a = new String('foo');
    var b = new String('foo');
    
    // false as a and b are type Object and reference different objects
    console.log(a == b);
    
    // false as a and b are type Object and reference different objects
    console.log(a === b);
    
    // true as a and 'foo' are of different type and, the Object (a) 
    // is converted to String 'foo' before comparison
    console.log(a == 'foo');
    console.log();