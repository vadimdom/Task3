console.log("DoubleList");

//Создание узла
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}


//Класс списка
class List {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }
}

//Прототип метода добавления узла в конец списка
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

//Прототип метода вывода головы списка
List.prototype.getHead = function() {
    if (this._length === 0 ){
        return "The list is empty";
    }
    return this.head;
};

//Прототип метода вывода хвоста списка
List.prototype.getTail = function() {
    if (this._length === 0 ){
        return "The list is empty";
    }
    return this.tail;
};

//Прототип метода добавления узла перед хвостом списка
List.prototype.prepend = function(value) {
    var node = new Node(value);
    if (this._length > 1) {
        this.tail.next = this.tail;
        node.next = this.tail.next;
        node.previous = this.tail.previous;
        this.tail.previous.next = node;
        this.tail.next.previous = node;
        this.tail = this.tail.next;
        this.tail.next = null;
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

//Прототип метода вывода значения по заданному номеру
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

//Прототип метода вывода номера в списке искомого числа
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


const doubleLi = new List();
doubleLi.append(10);
doubleLi.append(2);
doubleLi.prepend(5);
console.log("Head: ");
console.log(doubleLi.getHead());
console.log("Tail: ");
console.log(doubleLi.getTail());
console.log("The index of the element to search for: ");
console.log(doubleLi.indexOf(+(prompt("Введите искомое значение: "))));
console.log(doubleLi.at(+(prompt("Введите номер элемента списка: "))));
console.log("List: ");
console.log(doubleLi);