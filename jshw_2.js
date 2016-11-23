var a = 1,
    b = 1,
    c, d;

c = ++a;
alert(c); // 2: a=2, c=2
d = b++;
alert(d); // 1: d=1, b=2

c = (2 + ++a);
alert(c); // 5: a=3, c=5
d = (2 + b++);
alert(d); // 4: d=2+2=4, b=3 

alert(a); // 3: a инкрементируется 2 раза
alert(b); // 3: b инкрементируется 2 раза


var a = 2;
var x = 1 + (a *= 2)

// x=5

/*
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
*/
for (var outstr, i = 1; i <= 100; i++) {
    if (i % 3 == 0) outstr = "Fizz"
    else if (i % 5 == 0) outstr = "Buzz"
    else outstr = i.toString();
    console.log(outstr);
}

/* 
– исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
*/

for (var outstr = "", i = 1; i <= 100; i++, outstr = "") {
    if (i % 3 == 0) outstr = "Fizz";
    if (i % 5 == 0) outstr += "Buzz";
    if (!outstr) outstr = i.toString();
    console.log(outstr);
}

// Другой вариант без операции взятия остатка

for (var outstr = "", i = fizz = buzz = 1; i <= 100; i++, fizz++, buzz++, outstr = "") {
    if (fizz == 3) {
        fizz = 0;
        outstr = "Fizz";
    };
    if (buzz == 5) {
        buzz = 0;
        outstr += "Buzz";
    };
    if (!outstr) outstr = i.toString();
    console.log(outstr);;
}