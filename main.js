var X1 = 0;

var X2 = 0;

var Y1 = 0;

var Y2 = 0;

var inter_1 = null;

var inter_2 = null;

var inter_3 = null;

var FirstPlayerPoints = 0;

var SecondPlayerPoints = 0;

var DirectionSwitcher = 0;

var Direction = 2;

var Up_Down1 = 345;

var Up_Down2 = 345;

var X = 13;

var Y = 10;

var Random = null;

var Strike = null;

var StrikeDirection = null;

var operators = new Array('+', '-', '*');

var operator = '';

var operand_1 = 0;

var operand_2 = 0;

var correct = 0;

var answer;

var autostrike = false;

var up_1 = false;

var up_2 = false;

var down_1 = false;

var down_2 = false;

var SR = false;


document.onkeyup = function(Key){


	if(document.getElementById('switch-PC').checked == true){

	switch(Key.keyCode){

		case 87: up_1 = false;
			break;

		case 83: down_1 = false;
			break;

		case 38: up_2 = false;
			break;

		case 40: down_2 = false;
			break;

		}

	}

	if(document.getElementById('switch-MMK').checked == true){

	switch(Key.keyCode){

		case 37: up_1 = false;
			break;

		case 39: down_1 = false;
			break;

		case 38: up_2 = false;
			break;

		case 40: down_2 = false;
			break;

	}


	}

}
 
document.onkeydown = function(Key){


if(document.getElementById('switch-PC').checked == true){

   	switch(Key.keyCode){
 
		case 87 : up_1 = true;
			break;

		case 83: down_1 = true;
			break;

		case 38: up_2 = true;
			break;

		case 40: down_2 = true;
			break;

		case 13: Start();
			break;

		case 32: Restart();
			break;

		case 189: document.fr.result.value += '-';
	}

}

if(document.getElementById('switch-MMK').checked == true){


   	switch(Key.keyCode){
 
		case 37 : up_1 = true;
			break;

		case 39: down_1 = true;
			break;

		case 38: up_2 = true;
			break;

		case 40: down_2 = true;
			break;

		case 13: Start();
			break;

		case 32: Restart();
			break;

		case 189: document.fr.result.value += '-';
	}
}

		
	if(Key.keyCode==48 ||Key.keyCode==49 || Key.keyCode==50 || Key.keyCode==51 || Key.keyCode==52 || Key.keyCode==53 || Key.keyCode==54 || Key.keyCode==55 || Key.keyCode==56 || Key.keyCode==57){

		
		document.fr.result.value += String.fromCharCode(Key.keyCode); 


	}

}


function movingBlocks(){

	if(up_1 == true && document.getElementById('FirsBlock').offsetTop  > 1){ Up_Down1 -= 5;  document.getElementById('FirsBlock').style.top = Up_Down1 + "px"; }

	if(down_1 == true && document.getElementById('FirsBlock').offsetTop + 100 < 799){Up_Down1 += 5;  document.getElementById('FirsBlock').style.top = Up_Down1 + "px";}

	if(up_2 == true && document.getElementById('SecondBlock').offsetTop  > 1){Up_Down2 -= 5;  document.getElementById('SecondBlock').style.top = Up_Down2 + "px";}

	if(down_2 == true && document.getElementById('SecondBlock').offsetTop + 100 < 799){Up_Down2 += 5;  document.getElementById('SecondBlock').style.top = Up_Down2 + "px";}

}

function startMovingBlocks(){

	inter_3 = setInterval('movingBlocks()', 1);
}





function saveXY() {

	X2 = X1;   Y2 = Y1;
}


function question() {



	if(correct == 0){
		operand_1 = parseInt(Math.random()*10) + 1;
		operand_2 = parseInt(Math.random()*10) + 1;
		i = parseInt((Math.random()*10)/4);
		operator = operators[i];

		

		switch(operator){

				case '+':  answer = operand_1 + operand_2;
					break;

				case '-': answer = operand_1 - operand_2;
					break;

				case '*': answer = operand_1 * operand_2;
					break;

				case '/': answer = operand_1 / operand_2;
					break;

				}

		document.fr.operandi.value = operand_1 + " "+ operator + " " + operand_2 + " = ";

		document.fr.result.value = "";
		

		correct = 1;
	}

	if(correct == 1){

			if(answer == document.fr.result.value){ autostrike = true; }
	}


}




function Move() {

		


		if(parseInt(document.getElementById('Ball').style.top) + 50 > 800 )		{ autostrike = false;  DirectionSwitcher = 1; if(X1 < X2) {Direction = 1;}  if(X1 > X2){ Direction = 2; } Random = parseInt(Math.random()*10)/2;  saveXY(); }



		if(parseInt(document.getElementById('Ball').style.left) +50 > 1399)		{ autostrike = false; correct = 0; DirectionSwitcher = 2; if(Y1 < Y2) {Direction = 1;}  if(Y1 > Y2){ Direction = 2; } Random = parseInt(Math.random()*10)/2;  saveXY(); 

		FirstPlayerPoints +=1;  document.firstPlayerPoints.value_1.value = FirstPlayerPoints; }




		if(parseInt(document.getElementById('Ball').style.top)  < 5)			{ autostrike = false;  DirectionSwitcher = 3; if(X1 < X2) {Direction = 1;}  if(X1 > X2){ Direction = 2; } Random = parseInt(Math.random()*10)/2;  saveXY(); }



		if(parseInt(document.getElementById('Ball').style.left)  < 5)		{ autostrike = false; correct = 0;  DirectionSwitcher = 4; if(Y1 < Y2) {Direction = 1;}  if(Y1 > Y2){ Direction = 2; } Random = parseInt(Math.random()*10)/2;  saveXY(); 

		SecondPlayerPoints +=1; document.secondPlayerPoints.value_2.value = SecondPlayerPoints; }



		if(X1 > 1280 && X1 < 1300 && Y1+50 > parseInt(document.getElementById('SecondBlock').offsetTop) && Y1 < parseInt(document.getElementById('SecondBlock').offsetTop) + 100 )		{ 

			autostrike = false;

			correct = 0;

			DirectionSwitcher = 5; 

			Strike = parseInt(Math.random()*10); 

			StrikeDirection = parseInt(Math.random()*10);  

			if(Strike <= 5){ if(Y1<Y2){Direction = 1;} if(Y1>Y2){Direction = 2;} }  

			else{ Direction = Strike; }  

			Random = parseInt(Math.random()*10)/2; saveXY(); }



		if(X1 > 60 && X1 < 75 && Y1+50 > parseInt(document.getElementById('FirsBlock').offsetTop) && Y1+25 < parseInt(document.getElementById('FirsBlock').offsetTop + 100)){ 

			autostrike = false;

			correct = 0;

			DirectionSwitcher = 6; Strike = parseInt(Math.random()*10);

			StrikeDirection = parseInt(Math.random()*10);  

			if(Strike <= 5){ if(Y1<Y2){Direction = 1;} if(Y1>Y2){Direction = 2;} } 

			else { Direction = Strike; } 

			Random = parseInt(Math.random()*10)/2; saveXY(); }

		



		switch(DirectionSwitcher){


			case 0: 	 X1 +=X;  Y1 +=Y;

							document.getElementById('Ball').style.top = Y1 + "px";

							document.getElementById('Ball').style.left = X1 + "px";

						break;






			case 1: 	if(Direction == 1) {

									X1 -= X;  Y1 -= (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }



						if(Direction == 2) {

									X1 += X;  Y1 -= (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }

						break;





			case 2: 	if(Direction == 1) {

									X1 -= X;  Y1 -= Y + Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction == 2) {

									X1 -= X;  Y1 += Y + Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }

						break;






			case 3: 	if(Direction == 1) {

									X1 -= X;  Y1 += (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction == 2) {

									X1 += X;  Y1 += Y + Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }

						break;






			case 4: 	if(Direction == 1) {

									X1 += X;  Y1 -= Y - Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction == 2) {

									X1 += X;  Y1 += Y + Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }

						break;


				case 5: 	if(Direction == 1) {

									X1 -= X;  Y1 -= (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction == 2) {

									X1 -= X;  Y1 += (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction >5){

						

									if(X1<500 && StrikeDirection % 2 == 0){ X1 -= X; Y1 += Y - 3; }

									if(X1<500 && StrikeDirection % 2 == 1){ X1 -= X; Y1 -= Y - 3; }

									if(X1>500) { X1 -= X; }

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px";


								
						}
						break;


				case 6: 	if(Direction == 1) {

									X1 += X;  Y1 -= (Y + Random);

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction == 2) {

									X1 += X;  Y1 += Y + Random;

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px"; }


						if(Direction > 5){

							

									if(X1>900 && StrikeDirection % 2 == 0){ X1 += X; Y1 += Y - 3; }

									if(X1>900 && StrikeDirection % 2 == 1){ X1 += X;  Y1 -= Y - 3; }

									if(X1 < 900) { X1 += X; }

									document.getElementById('Ball').style.left = X1 + "px";

									document.getElementById('Ball').style.top = Y1 + "px";

									
						}


						break;


				
	}

	if(autostrike==true){

			if(X1 > X2){ document.getElementById('SecondBlock').style.top = Y1 -25 + "px"; }
			if(X1 < X2){ document.getElementById('FirsBlock').style.top = Y1 -25 + "px"; }
	}

	if(FirstPlayerPoints == document.getElementById('points').value || SecondPlayerPoints == document.getElementById('points').value){

		if(FirstPlayerPoints==document.getElementById('points').value){ swal(document.firstPlayerPoints.firstPlayer.value + " Good job!", "You won the game!", "success");  Stop();}

		if(SecondPlayerPoints==document.getElementById('points').value){ swal(document.secondPlayerPoints.secondPlayer.value + " Good job!", "You won the game!", "success"); Stop();} 

		}
	
		document.getElementById('n1').readOnly = "readOnly";
		document.getElementById('n2').readOnly = "readOnly";
}


function Start() {

	if(SR==false){

	clearInterval(inter_1);
	clearInterval(inter_2)

	inter_1 = null;
	inter_2 = null;


	 inter_1 = setInterval('Move()', 20);
	 inter_2 = setInterval('question()', 10); 

	 SR=true;
	}

	else{

		history.go(0); 
		SR = false;
	}

}



function Stop() {

	if(inter_1 != null && inter_2 != null){

			clearInterval(inter_1);
			clearInterval(inter_2);
			inter_1 = null;
			inter_2 = null; }


	else {

			inter_1 = setInterval('Move()', 20);
	 		inter_2 = setInterval('question()', 10); 
	}
}


