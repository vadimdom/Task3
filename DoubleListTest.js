//---------------------------------------------------------
const List = new DoubleList();
List.append(+(prompt("Введите элемент, который вставить в конец списка: ", "10")));
List.append(+(prompt("Введите элемент, который вставить в конец списка: ", "2")));
List.prepend(+(prompt("Введите элемент, который вставить в начало списка: ", "5")));
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
console.log(List.toString());
console.log(List.getHead());
console.log(List.getTail());
console.log(List.indexOf(+(prompt("Введите искомое значение: ", "2"))));
console.log(List.at(+(prompt("Введите номер элемента списка: ", "2"))));
List.each(plus1);
List.each(pow2);
List.reverse();
console.log(List.toString());
List.insertAt(+(prompt("Введите позицию, на которую вставить: ", "0")), +(prompt("Введите элемент, который вставить: ", "100")));
List.insertAt(+(prompt("Введите позицию, на которую вставить: ", "1")), +(prompt("Введите элемент, который вставить: ", "150")));
List.insertAt(+(prompt("Введите позицию, на которую вставить: ", "4")), +(prompt("Введите элемент, который вставить: ", "200")));
List.deleteAt(+(prompt("Введите номер элемента, который удалить: ", "5")));
List.deleteAt(+(prompt("Введите номер элемента, который удалить: ", "0")));
List.deleteAt(+(prompt("Введите номер элемента, который удалить: ", "1")));
console.log(List.toString());