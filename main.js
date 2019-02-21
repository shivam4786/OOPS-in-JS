//Factory Function for Creating Objects
console.log(' ');
console.log('Factory Function for Creating Objects');
function createCircle(radius){
  return {
    radius,
    draw: function(){
      console.log('draw');
    }
  }
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(' ');
console.log('Constructor Function for Creating Objects ');
//Constructor Function for Creating Objects 
function Circle(radius){
  console.log(this);
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

const another =  new Circle(1);

//Value vs Ref Types
 
//Value Types ->
// 1. Number
// 2. String
// 3. Boolean
// 4. Symbol
// 5. Undefined
// 6. Null

//Premitive Types
console.log(' ');
console.log('Premitive Types');
let x = 10;
console.log(x);
let y = x;
console.log(y);
x = 20;
console.log(y);

//Reference Types

let x1 = {value: 10};
console.log(x1.value);

let y1 = x1;
console.log(y1);

x1.value = 20;
console.log(y1);





// Refrence Types
// 1. Objects
// 2. Functions
// 3. Arrays
console.log(' ');
console.log('Refrence Types');
//Example of Value Type
let num = 10;

function increase(number){
  number++;
  // console.log(number);
}

increase(num);

console.log(num);

console.log(' ');
//Example of Reference Type
let obj = {value: 10};

console.log(obj.value);


function increase(obj){
  obj.value++;
  // console.log(number);
}

increase(obj);

console.log(obj.value);

//Adding and Removing Properties in JS Objects

//Objects in Js are Dynamic
console.log(' ');
function Rectangle(length, breadth){
  this.length = length;
  this.breadth = breadth;
  this.draw = function(){
    console.log('breadth is ', this.breadth);
    console.log('length is ', this.length);
    console.log('Perimeter is ', 2*(this.breadth + this.length));
    console.log('Area is ', this.length * this.breadth);
  }
}

const Rect1 = new Rectangle(2,3);

Rect1.draw();
console.log(' ');
//Adding Properties Dynamically
Rect1.location = {x: 1, y: 1};

console.log(Rect1);

//Another Way of Adding Properties Dynamically
console.log(' ');
Rect1['cordinates'] = {x1: 20, y1: 30};

console.log(Rect1);

// OR we can say 
// Another Use case is when we use Space or Special Characters
// const propName = 'sp ace OR special-char';
console.log(' ');
const propertyName = 'Coordinates';

Rect1[propertyName] = {x2: 30, y2: 40};

console.log(Rect1);

//Removing Props from JS Objects
console.log(' ');
delete Rect1.location;

console.log(Rect1);

//OR another Syntax is ->
//delete objName['needs a string'];

delete Rect1['Coordinates']

console.log(Rect1);


//Enumerating Properties of Objects
console.log(' ');
console.log('For in Loop List all key and Values');
console.log(' ');
for(let key in Rect1){
    console.log('consoles each key in Object -> ',key);
    console.log('consoles each value of key in Object -> ',key , ' -> ' ,Rect1[key]);
}

//Consoles only Properties not Methods
console.log(' ');
console.log('"Only Consoles Properties of Objects not Methods "');
for(let key in Rect1){
  if(typeof Rect1[key] !== 'function'){
    console.log('consoles each key in Object -> ',key);
    console.log('consoles each value of key in Object -> ',key , ' -> ' ,Rect1[key]);
  }
}


//Another Method to store keys
console.log(' ');
console.log('Another Method to store keys');
const key = Object.keys(Rect1);

console.log('store key as Array returned by Object.keys() Method ',key);

console.log(' ');
console.log('Another Way to check if Property is in Object');
if('length' in Rect1){
  console.log('Length is in Circle');
}

if('Radius' in Rect1){
  console.log('Radius is in Circle');
}

console.log(' ');
console.log('Abstraction');
//create local variables to the object 
function Square(side){
  this.side = side;
  let defaultLoc = {x: 0, y: 0};
  this.getDefaultLoc = function(){
    return defaultLoc;
  }
  let computedOptimumLoc = function(factor){
    //Something to do with default Location
  };
  this.draw = function(){
    computedOptimumLoc(0.1);
    console.log('draw');
  }

  //Along with Abstraction we can use Object.defineProperty Method and Getter and Setter
  //which accepts 3 arguments (reference to object i.e this, Property Name, {Object 
  //which has 2 functions, 1 for get : function(){}, 1 for set : function(){}})

  Object.defineProperty(this, 'defaultLoc', {
    get: function(){
      return defaultLoc;
    },
    set: function(value){
      if(!value.x || !value.y){
        throw new Error('Invalid Loc');
      }
      defaultLoc = value;
    }
  });
}

const sq1 = new Square(2);
console.log(sq1.getDefaultLoc());

console.log(sq1);