// step 1
// var ANIMAL = ANIMAL || {};
// ANIMAL.Dog = function(){};
// ANIMAL.Cat = function(){};
//     
// 2.
// function Cat(){}; // literal object notation
// var Dog = function(){}; // constructor object notation
// 
// 3.
// var dog = new Dog();
// 
// 4.
// var Animal = function(){
//     console.log("A new animal has been created.")
// }
// 
// var animal = new Animal();
// 5.
// var Animal = function(x){
//      this._x = x;
//     console.log(this._x);
// }
// 
// var animal = new Animal("Dog");
// 6.
// var Animal = function(type, breed, color, height, length){
//     this._type = type;
//     this._breed = breed;
//     this._color = color,
//     this._height = height;
//     this._length = length;
//     
//     console.log("I have a " + this._type + " that is a " + this._breed + " and is " + this._color + ". My " + this._type + " is " + this._height + " tall and " + this._length + " long.");
// }
// 
// var myAnimal = new Animal("dog", "maltese", "black", "4ft", "2ft");
// 7.
// var Animal = function(type, breed, color, height, length){
//     this._type = type;
//     this._breed = breed;
//     this._color = color,
//     this._height = height;
//     this._length = length;
//     
//    // console.log("I have a " + this._type + " that is a " + this._breed + " and is " + this._color + ". My " + this._type + " is " + this._height + " tall and " + this._length + " long.");
// }
// 
// var myAnimal = new Animal("dog", "maltese", "black", "4ft", "2ft");
// 
// for (var property in myAnimal){
//     console.log(property);
// }
// 8.
// 
// var type1 = window.prompt("Do you have a dog or cat?").toLowerCase();
// var color1 = window.prompt("What color is it?");
// 
// 
// var Animal = function(type, breed, color, height, length){
//     this._type = type;
//     this._breed = breed;
//     this._color = color,
//     this._height = height;
//     this._length = length;
//     
//    // console.log("I have a " + this._type + " that is a " + this._breed + " and is " + this._color + ". My " + this._type + " is " + this._height + " tall and " + this._length + " long.");
// }
// 
// 
// 
// Animal.prototype.speak = function(){
//     if(this._type === "dog"){
//         return "The " + this._color + " " + this._type + " is barking!";
//     }else if(this._type === "cat"){
//         return "The " + this._color + " " + this._type + " is meowing!";
//     }else{
//        return "What kind of animal is this?!?";
//     }
// } 
// var myAnimal = new Animal(type1, "maltese", color1, "4ft", "3ft");
// 
// console.log(myAnimal.speak());
// 
// 9.
// 
// var Animal = function(type, breed, color, height, length){
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
//     
//     this.checkType = function(){
//     if (this._type === "dog"){
//         return "dog";
//     }else{
//         return "cat";
//     }
// }
//     
//    // console.log("I have a " + this._type + " that is a " + this._breed + " and is " + this._color + ". My " + this._type + " is " + this._height + " tall and " + this._length + " long.");
// }
// var myAnimal = new Animal("cat", "maltese", "black", "4ft", "3ft");
// 
// 
// Animal.prototype.speak = function(){
//     "use strict"
//     if (this.checkType() === "dog"){
//         return "The Dog Barked";
//     } else{
//         return "The Cat Meowed";
//     }
// }
// console.log(myAnimal.speak());
// 
// 10.
// 
// var str = "The purpose of this string is to find certain words in it. For that purpose, you may see some repeated words. This is all for the purpose of using a function in order to match and count the number of times a certain words appears in a string or paragraph. The uses for this function would be very useful.";
// 
// 
// 
// 
// String.prototype.findWords = function(){
//     var findWords = this.match(/purpose/g);
//     window.alert(findWords.length);
//     
//     
// }
// 
// 
// str.findWords();
// 
// 
// 
// RECIPE CARD
// var favRecipe = function(title,servings,ingredients){
//     this._title = title;
//     this._servings = servings;
//     this._ingredients = ingredients;
//     
//     console.log(this._title + "\n" + "Serves: " + this._servings + "\n" + this._ingredients);
// }
// 
// var myFavRecipe = new favRecipe("Guacamole", 4, ["- 3 Avocados \n- 1 Lime \n- 1 Teaspoon Salt \n- 1/2 Cup Onion \n- 3 TableSpoons Cilantro \n- 2 Diced Tomatoes \n- 1 Teaspoon Garlic \n- 1 Pinch Ground Pepper \n"]);
// 
// 
// 
// Reading List
// var Books = function(title, author, boolean){
// 		this._title = title;
// 		this._author = author;
// 		this._alreadyRead = boolean;
// 		
// 		console.log(this._title + " By " + this._author );
// 		
// 		if( this._alreadyRead == true){
// 			console.log("You have already read " + this._title + " By " + this._author);
// 		} else{
// 		 	console.log("You need to read " + this._title + " By " + this._author)
// 		};
// 	};
// 
// var book1 = new Books('\"Lord of rings 1\"', 'J.R.R Tolkein', true);
// var book2 = new Books('\"Lord of rings 2\"', 'J.R.R Tolkein', false);
// var book3 = new Books('\"Lord of rings 3\"', 'J.R.R Tolkein', true);
// var book4 = new Books('\"Lord of rings 4\"', 'J.R.R Tolkein', false);
// var book5 = new Books('\"Lord of rings 5\"', 'J.R.R Tolkein', true);
// 
// 
// 
// 
// 
