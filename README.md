# Data Structures and Algorithms with JavaScript

## List
Lists are one of the most common organizing tools people use in their day-to-day lives.We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.

Lists is an ordered collection of items of some element type E. Note that this doesn't mean that the objects are in sorted order, it just means that each object has a position in the List, starting with position zero.

Lists features
- Useful for a finite and short number of items. 
- Less useful for long sort and complex search especially with the complex data structure. 

Defining the ADT(abstract data type) of list:

<pre><code>
Class List() { // List class ADT
  // Remove all contents from the list, so it is once again empty
  void clear();

  // Insert "it" at the current location
  // The client must ensure that the list's capacity is not exceeded
  boolean insert(Object it);

  // Append "it" at the end of the list
  // The client must ensure that the list's capacity is not exceeded
  boolean append(Object it);

  // Remove and return the current element
  Object remove();

  // Set the current position to the start of the list
  void moveToStart();

  // Set the current position to the end of the list
  void moveToEnd();

  // Move the current position one step left, no change if already at beginning
  void prev();

  // Move the current position one step right, no change if already at end
  void next();

  // Return the number of elements in the list
  int length();

  // Return the position of the current element
  int currPos();

  // Set the current position to "pos"
  boolean moveToPos(int pos);

  // Return true if current position is at end of the list
  Boolean isAtEnd();

  // Return the current element
  Object getValue();
}
</code></pre>

'There are library available in this repository for the abstarct list ADT. Use the librarry and solve below exercise. At last you can match result with given solution.

Exercises
1. Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.
2. Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.
3. Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender.
4. Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.
5. Create a check-in function for the video-rental kiosk program so that a returned
movies is deleted from the rented movies list and is added back to the available
movies list.
