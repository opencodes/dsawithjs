function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = function(element){
	  this.dataStore[this.top++] = element;
  }  
  this.pop = function(){
	  return this.dataStore[--this.top];
  }
  this.peek = function(){
	  return this.dataStore[this.top-1];
  }  
  this.clear = function(){
	  this.top = 0;
  }
  this.length = function(){
	  return this.top;  
  }  
}
