//---------------------------------------------------------
//List function
function DoubleList() {
    this._length = 0;
    this._head = null;
    this._tail = null;
}


//---------------------------------------------------------
//Creating of node
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

//---------------------------------------------------------
//Prototype of the list head view method
DoubleList.prototype.getHead = function() {
    if (this._length === 0 ) {
        throw new Error("The list is empty!");
    }

    return this._head.data;
};


//---------------------------------------------------------
//Prototype of the list tail view method
DoubleList.prototype.getTail = function() {
    if (this._length === 0 ) {
        throw new Error("The list is empty!");
    }

    return this._tail.data;
};


//---------------------------------------------------------
//Prototype of the method of adding a node to the end of the list
DoubleList.prototype.append = function(value) {
    var node = new Node(value);

    if (this._length) {
        this._tail.next = node;
        node.previous = this._tail;
        this._tail = node;
    } else {
        this._head = node;
        this._tail = node;
    }

    this._length++;
};

//---------------------------------------------------------
//Prototype of the method of adding a node to the begining of the list
DoubleList.prototype.prepend = function(value) {
    var node = new Node(value);

    if (this._length >= 1) {
        node.next = this._head;
        this._head.previous = node;
        this._head = node;
    } else {
        this._head = node;
        this._tail = node;
    }

    this._length++;
};

//---------------------------------------------------------
//Prototype of the method of displaying the list from the head
DoubleList.prototype.toString = function() {
    var currentNode = this._head, str = "";

    for (var position = 0; position < this._length; position++) {
        str += currentNode.data + " ";
        currentNode = currentNode.next;
    }

    return str;
};


//---------------------------------------------------------
//Prototype of the method for displaying the node by a given index
DoubleList.prototype._at = function(atPos) {
    var currentNode = this._head;

    if (this._length === 0 ) {
        throw new Error("The list is empty!");
    } else if (atPos < 0 || atPos > this._length-1) {
        throw new Error("It is wrong index. (should be from 1 to " + (this._length-1) + ")");
    }

    for (var position = 0; position < this._length; position++) {
        if (position === atPos) {
            return currentNode;
        } else {
            currentNode = currentNode.next;
        }
    }
};


//---------------------------------------------------------
//Prototype of the method for displaying the value of an element by a given index
DoubleList.prototype.at = function(atPos) {
    var element = this._at(atPos);
    return element.data;
};


//---------------------------------------------------------
//Prototype of the method for displaying the index of an element by a given value
DoubleList.prototype.indexOf = function(value) {
    var currentNode = this._head;

    for (var position = 0; position < this._length; position++) {
        if (currentNode.data === value) {
            return position;
        } else {
            currentNode = currentNode.next;
        }
    }

    return -1;
};

//---------------------------------------------------------
//Prototype of the method for processing each list element
DoubleList.prototype.each = function(fun) {
    var currentNode = this._head;

    for (var position = 0; position < this._length; position++) {
        fun(currentNode.data);
        currentNode = currentNode.next;
    }
};

//---------------------------------------------------------
//Prototype of the method for the list reverse
DoubleList.prototype.reverse = function() {
    var currentNode = this._head, temp;

    for (var position = 0; position < this._length; position++) {
        if (position === 0) {
            currentNode.previous = currentNode.next;
            currentNode.next = null;
            currentNode = currentNode.previous;
        } else if (position === this._length-1) {
            currentNode.next = currentNode.previous;
            currentNode.previous = null;
        } else {
            temp = currentNode.next;
            currentNode.next = currentNode.previous;
            currentNode.previous = temp;
            currentNode = currentNode.previous;
        }
    }

    temp = this._head;
    this._head = this._tail;
    this._tail = temp;
};

//---------------------------------------------------------
//Prototype of the method for adding an element to the given position
DoubleList.prototype.insertAt = function(atPos, val) {
    if (atPos === 0) {
        this.prepend(val);
    } else {
        var element = this._at(atPos);
        var node = new Node(val);
        element.previous.next = node;
        node.previous = element.previous;
        element.previous = node;
        node.next = element;
        this._length++;
    }
};


//---------------------------------------------------------
//Prototype of the method for deleting an element at the given position
DoubleList.prototype.deleteAt = function(atPos) {
    if (atPos === 0) {
        this._head = this._head.next;
        this._head.previous = null;
    } else if (atPos === this._length-1) {
        this._tail = this._tail.previous;
        this._tail.next = null;
    } else {
        var element = this._at(atPos);
        element.previous.next = element.next;
        element.next.previous = element.previous;
    }
    
    this._length--;
};