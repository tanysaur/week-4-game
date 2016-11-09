
// Variables:
// targetNumber to be set: 19-120
// numberOptions for each food: 1-12
// counter: init to 0

// prompt user to play

// functions:
// Check subTotalNumber < targetNumber
// Check 

// Assign random value to food (foodRandomValue)
// User clicks on a food, add value subTotalNumber
// checkSubTotal

var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [sushiVal, makiVal, nigiriVal, gyozaVal];
var sushiVal;
var makiVal;
var nigiriVal;
var gyozaVal;
var newGame = true;
var targetNumber = 0;


$(document).ready(function() {
	//start game
	//gameStarts();
})

// function gameStarts(){

	//try while loop
	if(newGame){
	
		var targetNumber = Math.floor((Math.random() * 120) + 19);
		$(".targetNumber").text(targetNumber);
		for(i = 0; i < numberOptions.length; i++){
			numberOptions[i] = Math.floor(Math.random()* 12) +1;
			//$("#food").data(data-value, numberOptions[i]);
		}

		// $(".food").on("click", function(){

		// })

		$("#sushi").on("click", function(){
			counter += numberOptions[0];
			var sushiQ = 0;
			sushiQ++;
			$(".sushiQ").text(sushiQ);
			checkCounterStats();
		})

		$("#maki").on("click", function(){
			counter += numberOptions[1];
			var makiQ = 0;
			makiQ++;
			$(".makiQ").text(makiQ);
			checkCounterStats();
		})

		$("#nigiri").on("click", function(){
			counter += numberOptions[2];
			var nigiriQ = 0;
			nigiriQ++;
			$(".nigiriQ").text(nigiriQ);
			checkCounterStats();
		})

		$("#gyoza").on("click", function(){
			counter += numberOptions[3];
			var gyozaQ = 0;
			gyozaQ++;
			$(".gyozaQ").text(gyozaQ);
			checkCounterStats();
		})
	}
//}

console.log(numberOptions);

// $(".food").on("click", function(){
// 	// $("#food").attr(data-value, numberOptions[i]);

// 	// console.log(numberOptions);
// 	// counter = numberOption[i] + counter;
// 	// checkCounterStats();
// 	// console.log(counter);
	
// });



function checkCounterStats(){
	//when user reached your target number
	if(counter == targetNumber){
		wins++;
		alert("Congratulations, you have filled up your plate!");
		$(".wins").text("Number of plates enjoyed: " + wins);
		playAgain();
	}
	//when user's shopping cart sub total is still below your target / budget$
	else if(counter < targetNumber){
		console.log("keep adding to your plate");
		$("#plateNumber").text(counter);
	} 
	//when user has gone above the target / budget$
	else if(counter > targetNumber){ //plate not yet complete
		losses++;
		$(".losses").text("Number of plates wasted: " + losses);
		alert("You went over your budget!");
		playAgain();
	}
}

//asks user if they want to play again
function playAgain(){
	var playAgain =	confirm("Do you want to play again?")
	if (playAgain){
		counter = 0;
		sushiVal = 0;
		makiVal = 0;
		nigiriVal = 0;
		gyozaVal = 0;
		wins = 0;
		losses = 0;
		newGame = true;

	} else {
		alert("OK, see you again!");
	}
	
}