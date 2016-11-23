/*
Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.
*/

function GetColor(red, green, blue) {

    function Correction(color) {
        var num = +color;
        if (isNaN(num) || num < 0 || num >= 256) return NaN;
        return ~~num;
    }

    var result = "#"
    for (i in dim = [Correction(red), Correction(green), Correction(blue)]) {
        if (isNaN(dim[i])) return "";
        if (dim[i] < 16) result += "0";
        result += dim[i].toString(16).toUpperCase();
    };
    return result;
};

console.log("1: " + GetColor("gg", "234", "0")); // ""
console.log("2: " + GetColor("45.3", "99", "35")); // correct
console.log("3: " + GetColor(1, 45, 35)); // correct
console.log("4: " + GetColor(-45, 237, 35)); // ""
console.log("5: " + GetColor(127, 45, 535)); // ""


/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

//Выбрал решение без операций деления, буду брать строку побуквенно
function to_object(number) {
    var result = {};
    if (isNaN(+number) || number < 0 || number > 999) console.log("Not a number or number is out of range 0-999.")
    else {
        var str = +number.toFixed().split("");
        switch(str.length) {
        case 1:
            str.splice(0,0,"0");
        case 2:
            str.splice(0,0,"0");
        case 3:
            result["единицы"] = +str[2];
            result["десятки"] = +str[1];
            result["сотни"] = +str[0];
        };
    };
    return result;
}

console.log(to_object(n));

/*
Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку. Примеры работы:
console.log(objectToQueryString({user: 'Dmitry'})); // user=Dmitry console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); // user=Dmitry&password=pass console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id=1})); // user=Dmitry&password=pass&id=1
*/

function objectToQueryString(object) {
    var result="";
    for (key in object) result+=key+"="+object[key]+"&";
    return result.substring(0,result.length-1);    
    
}


// Вольные упражнения. Вывод кол-ва свойств и методов объекта window
var result = {},
    type;
console.log("Подсчёт кол-ва свойств объекта Window с группировкой по типам с выводом undefined свойств");
for (var key in window) {
    type = typeof window[key];
    if (result[type] === undefined) result[type] = 1
    else result[type]++;
    if (type == "undefined") {
        console.log(key + " undefined!")
    }
};
console.log("Кол-во свойств объекта Window с группировкой по типам")
for (type in result) console.log(type + ": " + result[type]);
console.log("--------------") ж