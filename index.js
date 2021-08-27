var readlineSync =require('readline-sync');

console.log("\t\t\tSimple Quiz about Disney & Marvels");
console.log("\t\t\t----------------------------------");
var userName=readlineSync.question("\nMay I have your name : ");
var userAns=readlineSync.question("\nWelcome " +userName+ " \nDo you want to play this SIMPLE QUIZ about Disney & Marvels \n(yes/no) ");

if(userAns=="yes")
{
  console.log("\nHello " + userName+" You will have a great time");
var userSelect=readlineSync.question ("\nWhat do you want to play : \n1.Disney\n2.Marvels(1/2)");

var score=0;
function play(question,answer)
{
var userres=readlineSync.question(question);
if(answer==userres)
{
  score=score+1;
  console.log("\nYou are correct\nYour Score is : "+score+"\n");
}
else
{
console.log("\nYou are wrong\nYour Score is : "+score+"\n");
}
}
if(userSelect==1)
{
console.log("\n\nDisney Questions\n--------------------");
var questions=[{
  qus : "Who is Mickey Mouse best friend? \n1.Minnie Mouse\n2.Timon\n3.Pumba\nAns(1/2/3): ",
  ans : "1"},
  {qus : "Frozen movie Anna & Else relationship?\n1.Enemy\n2.Friends\n3.Sisters\nAns(1/2/3): ",
  ans : "3"},
  {qus : "How is the Rapunzel hair?\n1.Too Long\n2.Long\n3.Short\nAns(1,2,3): ",
  ans : "1"},
  {qus : "How the prince identify cinderlla?\n1.Dress\n2.Shoes\n3.Hair\nAns(1,2,3)",
  ans : "2"},
  {qus : "who was came when aladdin rub the lamp?\n1.Genei\n2.Ghost\n3.God\nAns(1,2,3)",
  ans :"1"},
  {qus : "Frozen Elsa having which power?\n1.Frezze with ice\n2.Fire\n3.Wind\nAns(1,2,3): ",
  ans : "1"},
{qus : "In jungle book what is the bear name?\n1.Bakira\n2.Ballu\n3.Raksha\nAns(1,2,3): ",
  ans : "2"
},
{qus : "Who will help the mowli at end of jungle book?\n1.Monkey\n2.Tiger\n3.Elephants\nAns(1,2,3): ",
  ans : "3"},
  {qus : "What is the name of snowman in frozen?\n1.Hans\n2.Swen\n3.Olaf\nAns(1,2,3): ",
  ans : "3"},
  {qus : "who gave shoes to Cindrella?\n1.Stepmother\n2.Fairy Godmother\n3.Prince\nAns(1,2,3): ",
  ans : "2"}
];
for(var i=0;i<questions.length;i++)
{
  var curqus=questions[i];
  play(curqus.qus,curqus.ans);
}
}
else
{
console.log("\n\nMarvel Questions\n--------------------");
var questions=[{
  qus : "What was iron man invention? \n1.Suit\n2.Robot\n3.Car\nAns(1/2/3): ",
  ans : "1"},
  {qus : "who is hulk?\n1.Professor\n2.Engineer\n3.Doctor\nAns(1/2/3): ",
  ans : "3"},
  {qus : "what is thor weapon?\n1.Hammer\n2.sword\n3.knife\nAns(1,2,3): ",
  ans : "1"},
  {qus : "who is thor brother?\n1.Jarvas\n2.Loki\n3.Hans\nAns(1,2,3)",
  ans : "2"},
  {qus : "who is the first avengers?\n1.caption america\n2.Iron man\n3.Antman\nAns(1,2,3)",
  ans :"1"},
  {qus : "who is ironman assistant?\n1.Jarvis\n2.Loki\n3.Ken\nAns(1,2,3): ",
  ans : "1"},
{qus : "what was Doctor strenge learn?\n1.Techonolgy\n2.Magic\n3.Marial Arts\nAns(1,2,3): ",
  ans : "2"
},
{qus : "Who is thanos favorite Child?\n1.Monkey\n2.Perter quill\n3.Gamora\nAns(1,2,3): ",
  ans : "3"},
  {qus : "What is the name of tree-like humanoid in Garidan of galaxy?\n1.Peter quill\n2.Rocket\n3.Groot\nAns(1,2,3): ",
  ans : "3"},
  {qus : "Avengers End game who will die\n1.Spiderman\n2.Ironman\n3.Antman\nAns(1,2,3): ",
  ans : "2"}
];
for(var i=0;i<questions.length;i++)
{
  var curqus=questions[i];
  play(curqus.qus,curqus.ans);
}

}
}
else
{
  console.log("Bye Bye Friend");
}
