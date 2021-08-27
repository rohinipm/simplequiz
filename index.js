var readlineSync =require('readline-sync');

console.log("\t\t\tSimple Quiz about Disney & Marvels");
console.log("\t\t\t----------------------------------");
var userName=readlineSync.question("\nMay I have your name : ");
var userAns=readlineSync.question("\nWelcome " +userName+ " \nDo you want to play this SIMPLE QUIZ about Disney & Marvels \n(yes/no) ");
