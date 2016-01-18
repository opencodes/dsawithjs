//Using Lists to Manage a Kiosk
var movieList = new List();
var movies = ['The Shawshank Redemption','The Godfather','The Godfather: Part II','Pulp Fiction','Housing and Rent','The Good, the Bad and the Ugly','12 Angry Men','Schindlers List','The Dark Knight','The Lord of the Rings: The Return of the King','Fight Club','Star Wars: Episode V - The Empire Strikes Back','One Flew Over the Cuckoo’s Nest','| Chapter 3: Lists','The Lord of the Rings: The Fellowship of the Ring','Inception','Goodfellas','Star Wars','Seven Samurai','The Matrix','Forrest Gump','City of God'];
var movieList = new List();
var customers = new List();

function displayList(list) {
	list.front();
	for (var i = 0; i < list.length(); i++) {

		if (list.getElement() instanceof Customer) {
			console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
		} else {
			console.log(list.getElement());
		}
		list.next();
	}
}

function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
	if (movieList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		
		filmList.remove(movie);
	} else {
		console.log(movie + " is not available.");
	}
}

for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}

//console.log("Available movies:");
//displayList(movieList);

console.log("Enter your name: ");
var name = "Rajesh";
console.log("What movie would you like? ");
var movie = 'The Godfather';
checkOut("Rajesh", 'The Godfather', movieList, customers);
checkOut("Rajesh", 'Hey Baby', movieList, customers);

console.log("Customer Rentals:");
displayList(customers);
console.log("Movies Now Available");
console.log(movieList)
//displayList(movieList);
