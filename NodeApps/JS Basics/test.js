// the 3 types of js Functions
// 1. JS reference Functions   ()used for use for laibrary
//     a. this can be used as a class in JS
    var myObject=function(){
        // all public are prefixed using 'this'
        // 'this ' is scope of an Objuect in javacript function
        this.add=function(x,y){
            return x+y;
        }

        this.mult=function(x,y){
            return x*y;
        }

    };

var obj= new myObject() //

console.log('Add=',obj.add(3,4))
console.log('Mult=',obj.mult(3,4))

//Prototype(blueprint) to write extended Functionality 
myObject.prototype.div=function(x,y){
    return x/y;
}

console.log('Div=',obj.div(3,4))
//2.JS close Function aka functions (used for )

    //a. Genral porpose reusable codes
    function myFunction(){
        console.log('myFunction called');
    }

    myFunction()

    //b. use cloes type function as clasas that returns Object
function classObject(){
        // function innerfunction(){
        //     console.log('innerfunctions')
        // }


    // all public members are defined inside return statment
    return{
        addX:function(x,y){
            return x+y;
        },
        multX:function(x,y){
            return x*y;
        }
    }
}

var obj1=new classObject();
console.log('addX=',obj1.addX(3,4))
console.log('addX=',obj1.multX(3,4))

// obj1.innerfunction()

//3. Imediately invocable Function Expression (IIFE)
(function(){
console.log('I am IIFE')
})();