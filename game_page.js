var p1Name=localStorage.getItem("player1")
var p2Name=localStorage.getItem("player2")
document.getElementById("p1Name").innerHTML=p1Name+" : "
document.getElementById("p2Name").innerHTML=p2Name+" : " 
var p1Score=0
document.getElementById("p1Score").innerHTML=p1Score
var p2Score=0
document.getElementById("p2Score").innerHTML=p2Score
QTurn="p1"
Aturn="p2"
document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p1Name
document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+p2Name
