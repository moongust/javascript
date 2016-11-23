function isPalindrome(s) {
return(s=s.toLowerCase().replace(/[\s,]/g,""))==s.split("").reverse().join("")
}