//Defining the ADT(abstract data type) of list:
function List() {
  //listSize (property) Number of elements in list
  this.listSize = 0;
  //pos (property) Current position in list
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  //clear (function) Clears all elements from list
  this.clear = clear;
  this.find = find;
  //toString (function) Returns string representation of list
  this.toString = toString;
  //insert (function) Inserts new element after existing element
  this.insert = insert;
  //append (function) Adds new element to end of list
  this.append = append;
  //remove (function) Removes element from list
  this.remove = remove;
  //front (function) Sets current position to first element of list
  this.front = front;
  //end (function) Sets current position to last element of list
  this.end = end;
  //prev (function) Moves current position back one element
  this.prev = prev;
  //next (function) Moves current position forward one element
  this.next = next;
  //currPos (function) Returns the current position in list
  this.currPos = currPos;
  //moveTo (function) Moves the current position to specified position
  this.moveTo = moveTo;
  //getElement (function) Returns element at current position
  this.getElement = getElement;
  //length (property) Returns the number of elements in list
  this.length = length;
  //contains (property): Determining if a Given Value Is in a List
  this.contains = contains;
}
