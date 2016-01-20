/**
 * 1. Write a function that inserts an element into a list only if the element to be inserted
 * is larger than any of the elements currently in the list. Larger can mean either greater
 * than when working with numeric values, or further down in the alphabet, when
 * working with textual values. 
 */
console.log("Question 1.-------------------- ");
var list = new List();
list.maxCharIndex = 64;
list.insert = function(element){
	
	if(element.charCodeAt(0) > this.maxCharIndex){
		this.append(element);
	}else{
		console.log("You can not insert lower character name " + element);
	}
	list.maxCharIndex = element.charCodeAt(0);
	
}

var customers = ['Amit', 'Babita', 'Chandan'];
for (var i = 0; i < customers.length;i++) {
	list.insert(customers[i]);
}
list.insert('Rajesh');
list.insert('Mukesh');
console.log(list.toString());

/**
 * 2. Write a function that inserts an element into a list only if the element to be inserted
 * is smaller than any of the elements currently in the list.
 */
console.log("Question 2.-------------------- ");	
list.insert = function(element){
	
	if(element.charCodeAt(0) < this.maxCharIndex){
		this.append(element);
	}else{
		console.log("You can not insert lower character name " + element);
	}
	list.maxCharIndex = element.charCodeAt(0);
	
}

var customers = ['Amit', 'Babita', 'Chandan'];
for (var i = 0; i < customers.length;i++) {
	list.insert(customers[i]);
}
list.insert('Rajesh');
list.insert('Mukesh');
console.log(list.toString());	

/**
 * 3. Create a Person class that stores a person's name and their gender. Create a list of
 * at least 10 Person objects. Write a function that displays all the people in the list of
 * the same gender.
 */
console.log("Question 3.-------------------- ");	
var person = new List();
var persons = [{name: "Rajesh", gender:"M"},
               {name: "Rakesh", gender:"M"},
               {name: "Babita", gender:"F"},
               {name: "Rina", gender:"F"},
               {name: "Rupesh", gender:"M"},
               {name: "Ramesh", gender:"M"},
               {name: "Suresh", gender:"M"},
               {name: "Rani", gender:"F"},
               {name: "Amit", gender:"M"},
               {name: "Arpita", gender:"F"}];
for(var i = 0; i < persons.length; i++){
	person.append(persons[i]);
}
console.log(person.toString());	
person.displayByGender = function(gender){
	this.front();
	console.log("Persons with gender " + gender + " are:");
	var list = [];
	for(var i = 0; i < person.length(); i++){
		this.pos = i;
		if(this.getElement().gender == gender){
			list.push(this.getElement().name);
		}
		
	}
	console.log(list.join(','));
	
}

person.displayByGender("M");
person.displayByGender("F");
	 
/**
 * 4. Modify the video-rental kiosk program so that when a movie is checked out it is
 * added to a list of rented movies. Display this list whenever a customer checks out
 * a movie.
 */
console.log("Question 4.-------------------- ");	
	//Using Lists to Manage a Kiosk
var movies = ['The Shawshank Redemption','The Godfather','The Godfather: Part II','Pulp Fiction','Housing and Rent','The Good, the Bad and the Ugly','12 Angry Men','Schindlers List','The Dark Knight','The Lord of the Rings: The Return of the King','Fight Club','Star Wars: Episode V - The Empire Strikes Back','One Flew Over the Cuckooâ€™s Nest','| Chapter 3: Lists','The Lord of the Rings: The Fellowship of the Ring','Inception','Goodfellas','Star Wars','Seven Samurai','The Matrix','Forrest Gump','City of God'];
var movieList = new List();
var customers = new List();
var rentedMovieList = new List();

function displayList(list) {
	list.front();
	var temp = [];
	for (var i = 0; i < list.length(); i++) {

		temp.push(list.getElement());
		
		list.next();
	}
	console.log(temp.join(', '))
}

function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, filmList) {
	if (movieList.contains(movie)) {
		
		filmList.remove(movie);
		rentedMovieList.append(movie);
	} else {
		console.log(movie + " is not available.");
	}
	
}

for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}

checkOut("Rajesh", 'The Godfather', movieList);
checkOut("Mukesh", 'Pulp Fiction', movieList);
console.log('Movie list:')
displayList(movieList);
console.log('Rented Movie list:')
displayList(rentedMovieList);

/**
 * 5. Create a check-in function for the video-rental kiosk program so that a returned
 * movies is deleted from the rented movies list and is added back to the available
 * movies list.
 */
console.log("Question 5.-------------------- ");	
function checkIn(name, movie, filmList) {
	filmList.append(movie);
	rentedMovieList.remove(movie);		
}
checkIn("Rajesh", 'The Godfather', movieList);
console.log('Movie list:')
displayList(movieList);
console.log('Rented Movie list:')
displayList(rentedMovieList);

