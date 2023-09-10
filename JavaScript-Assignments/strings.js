var s="Java Is open source language and Javascript is scripting language. java Is very user-friendly and easy to use";

console.log(s.replace("Java","Python"));

var pattern=/java/g;
console.log(s.replace(pattern,"python"));

var pattern=/Java/g;
console.log(s.replace(pattern,"Hello"));

var pattern=/is/gi;
console.log(s.replace(pattern,"are"));