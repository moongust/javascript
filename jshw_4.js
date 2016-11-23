/* 
Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
console.log(min(0, 10)); // → 0 
console.log(min(0, -10)); // → -10
*/

function min(arg1, arg2) {
    return (arg1 < arg2) ? arg1 : arg2;
}
console.log(min(0, 10));
console.log(min(0, -10));

/*
Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs. 

Решил написать универсальную функцию:
*/

function countChar(str, char) {
    var count = 0;
    char = char || "B";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) count++;
    }
    return count;
}

var countBs = countChar;

/* 
Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
*/

function isEven(num) {
    if (num == 0) return true
    else if (num == 1) return false
    else return isEven(num > 0 ? num - 2 : num + 2);
}
