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
