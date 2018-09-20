'use strict';

//Zadanie pierwsze
console.log('zadanie pierwsze');
/* Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. 
Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy 
skorzystać z żadnej z tych opcji? Twoim zadaniem będzie stworzenie dwóch zmiennych 
z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
 */

var firstString = 'Hello';
var secondString = 'World';
var joinedString = firstString + ' ' + secondString;
console.log(joinedString);

//Zadanie drugie
console.log('zadanie drugie');
/* Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. jeśli użytkownik nie
 poda któregoś z parametrów, ma on zostać zastąpiony 1. Nie wolno korzystać z instrukcji warunkowych! Funkcję stwórz za 
 pomocą arrow function. */

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5));

//Zadanie trzecie
console.log('zadanie trzecie');
/* Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane.
 Załóż, że argumenty zawsze będą liczbami. Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.
 average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
*/

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, arg) {
    return sum += arg;
  }, 0) / args.length;
};
console.log(average(1, 3, 6, 6));

//Zadanie czwarte
console.log('zadanie czwarte');
/* Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do 
funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread! */

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//Zadanie piąte
console.log('zadanie piąte');
/*Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak'].
 Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.*/

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log(firstname, lastname);
