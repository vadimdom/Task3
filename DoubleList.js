//---------------------------------------------------------
//List class
class List {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }
}


//---------------------------------------------------------
//Creating of node
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}


//---------------------------------------------------------
//Addition  1 function
var  plus1 = function(val) {
    return val+1;
}


//---------------------------------------------------------
//Squaring function
var  pow2 = function(val) {
    return val*val;
}

//---------------------------------------------------------
//Prototype of the list head view method
List.prototype.getHead = function() {
    if (this._length === 0 ){
        return "The list is empty";
    }
    return this.head.data;
};


//---------------------------------------------------------
//Prototype of the list tail view method
List.prototype.getTail = function() {
    if (this._length === 0 ){
        return "The list is empty";
    }
    return this.tail.data;
};


//---------------------------------------------------------
//Prototype of the method of adding a node to the end of the list
List.prototype.append = function(value) {
    var node = new Node(value);
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;
    return node;
};

//---------------------------------------------------------
//Prototype of the method of adding a node before the end of the list
List.prototype.prepend = function(value) {
    var node = new Node(value);
    if (this._length > 1) {
            var currentNode = this.head,
            position = 1;
            while (position <= this._length) {
                if (position === this._length){
                    node.next = currentNode;
                    node.previous = currentNode.previous;
                    currentNode.previous.next = node;
                    currentNode.previous = node;
                    break;
                }else{
                    currentNode = currentNode.next;
                    position++;
                }
            }
    } else if (this._length === 1){
        this.head = node;
        this.head.next = this.tail;
        this.tail.previous = node;
    }else {
        this.head = node;
        this.tail = node;
    }

    this._length++;
    return node;
};

//---------------------------------------------------------
//Prototype of the method of displaying the list from the head
List.prototype.view = function() {
    var currentNode = this.head,
    position = 1, str = "";

while (position <= this._length) {
    str += currentNode.data + " ";
    currentNode = currentNode.next;
    position++;
}
return str;
};


//---------------------------------------------------------
//Prototype of the method for displaying the value of an element by a given index
List.prototype.at = function(atPos) {
    var currentNode = this.head,
    position = 1;

    if (this._length === 0 ){
        return "The list is empty";
    }else if (atPos < 1 || atPos > this._length) {
        return "It is wrong index. (should be from 1 to " + this._length + ")";
    }

while (position <= this._length) {
    if (position === atPos){
        return currentNode.data;
    } else {
        currentNode = currentNode.next;
        position++;
    }
}
};


//---------------------------------------------------------
//Prototype of the method for displaying the index of an element by a given value
List.prototype.indexOf = function(value) {
    var currentNode = this.head,
    position = 1;

while (position <= this._length) {
    if (currentNode.data === value){
        return position;
    }else{
        currentNode = currentNode.next;
        position++;
    }
}
return "This value is not in the list.";
};

//---------------------------------------------------------
//Prototype of the method for processing each list element
List.prototype.each = function(fun) {
    var currentNode = this.head,
    position = 1;

while (position <= this._length) {
    currentNode.data = fun(currentNode.data);
    currentNode = currentNode.next;
    position++;
}
return "It's okay!";
};

//---------------------------------------------------------
//Prototype of the method for the list reverse
List.prototype.reverse = function() {
    var currentNode = this.head,
    position = 1, temp;

while (position <= this._length) {
    if (position === 1){
        currentNode.previous = currentNode.next;
        currentNode.next = null;
        currentNode = currentNode.previous;
        position++;
    } else if (position === this._length){
        currentNode.next = currentNode.previous;
        currentNode.previous = null;
        break;
    }else{
        temp = currentNode.next;
        currentNode.next = currentNode.previous;
        currentNode.previous = temp;
        currentNode = currentNode.previous;
        position++;
    }
}
temp = this.head;
this.head = this.tail;
this.tail = temp;
return "List is reversed!";
};

//---------------------------------------------------------
//Prototype of the method for adding an element to the given position
List.prototype.insertAt = function(atPos, val) {
    var currentNode = this.head,
    position = 1;
    var node = new Node(val);
    
    if (this._length === 0 ){
        return "The list is empty";
    }else if (atPos < 1 || atPos > this._length) {
        return "It is wrong index. (should be from 1 to " + this._length + ")";
    }

while (position <= this._length) {
    if (atPos === 1 && position === atPos){
        node.next = currentNode;
        node.previous = null;
        currentNode.previous = node;
        this.head = node;
        break;
    }else if (position === atPos){
        node.next = currentNode;
        node.previous = currentNode.previous;
        currentNode.previous.next = node;
        currentNode.previous = node;
        break;
    }else{
        currentNode = currentNode.next;
        position++;
    }
}
this._length++;
return "Element is added!";
};


//---------------------------------------------------------
//Prototype of the method for deleting an element at the given position
List.prototype.deleteAt = function(atPos) {
    var currentNode = this.head,
    position = 1;
    
    if (this._length === 0 ){
        return "The list is empty";
    }else if (atPos < 1 || atPos > this._length) {
        return "It is wrong index. (should be from 1 to " + this._length + ")";
    }

while (position <= this._length) {
    if (atPos === 1 && position === atPos){
        this.head = currentNode.next;
        this.head.previous = null;
        break;
    }else if (atPos === this._length && position === atPos){
        this.tail = currentNode.previous;
        this.tail.next = null;
        break;
    } else if (position === atPos){
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
        break;
    }else{
        currentNode = currentNode.next;
        position++;
    }
}
this._length--;
return "Element is deleted!";
};