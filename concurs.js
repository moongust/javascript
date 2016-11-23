function isPalindrome(s) {
    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) return 0;
    };
    return 1;
}

//Test

function isPalindrome(s) {
    for (var r, i = 0, j = ~~s.length / 2; i < j; i++) { //test
        r = s[i] != s[j]
        console.log("i=" + i + " j=" + j + " r=" + r); //test
        if (r = s[i] != s[j]) break;

    } //test
    return !r;
}

//Вариант с перебором с краёв строки

function isPalindrome(s) {
    for(i=0,j=(s=s.toLowerCase().replace(/[\s,]/g,"")).length-1;i<j;i++,j--)if(s[i]!=s[j])return!1;return!0;
}

//Вариант со сравнением строк, 78 символов

function isPalindrome(s) {
    return(s=s.toLowerCase().replace(/[\s,]/g,""))==s.split("").reverse().join("")
}

