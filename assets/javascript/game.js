
// Variables:
// targetNumber to be set: 19-120
// numberOptions for each food: 1-12
// counter: init to 0

// Functions:
// check counter == , < , > targetNumber
// reset counters
// play again

// Assign random value for food (numberOptions)
// User clicks on a food, then adds value to counter
// check counter conditions in function above
// if condition is met, prompt user if they want to play again

var counter = 0;
var wins = 0;
var losses = 0;
var sushiVal;
var makiVal;
var nigiriVal;
var gyozaVal;
var numberOptions = [sushiVal, makiVal, nigiriVal, gyozaVal];
var sushiQ = 0;
var makiQ = 0;
var nigiriQ = 0;
var gyozaQ = 0;

var targetNumber = Math.floor((Math.random() * 120) + 19);
$(".targetNumber").text(targetNumber);

resetCounters();

$("#sushi").on("click", function(){
	counter += numberOptions[0];
	sushiQ++;
	$(".sushiQ").text(sushiQ);
	checkCounterStats();
})

$("#maki").on("click", function(){
	counter += numberOptions[1];
	makiQ++;
	$(".makiQ").text(makiQ);
	checkCounterStats();
})

$("#nigiri").on("click", function(){
	counter += numberOptions[2];
	nigiriQ++;
	$(".nigiriQ").text(nigiriQ);
	checkCounterStats();
})

$("#gyoza").on("click", function(){
	counter += numberOptions[3];			
	gyozaQ++;
	$(".gyozaQ").text(gyozaQ);
	checkCounterStats();
})


//this function resets the counters as well as their corresponding displays on the html
function resetCounters(){
	//this re-assigns a random value to the four food listed / numberOptions[]
	for(i = 0; i < numberOptions.length; i++){
		numberOptions[i] = Math.floor(Math.random()* 12) +1;
	}

	//this re-assigns a new amount / budget / targetNumber for the user
	var newTargetNumber = Math.floor((Math.random() * 120) + 19);
		$(".targetNumber").text(newTargetNumber);

	targetNumber = newTargetNumber;
	//console.log(numberOptions);
	
	//(optional) resets the Cart counter
	$("#plateNumber").text(counter);
	sushiQ = 0;
	$(".sushiQ").html(sushiQ);
	makiQ = 0;
	$(".makiQ").text(makiQ);
	nigiriQ = 0;
	$(".nigiriQ").text(nigiriQ);
	gyozaQ = 0;
	$(".gyozaQ").text(gyozaQ);
	
}

//this function checks if the user has reached the target number or if it has passed it
function checkCounterStats(){
	//when user reached your target number, increment win, alert user with the win, ask if they want to play again
	if(counter == targetNumber){
		wins++;
		alert("You have filled up your plate! Enjoy your food!");
		$(".wins").text("Number of plates enjoyed: " + wins);
		playAgain();
	}
	//when user's shopping cart sub total is still below your target / budget$
	else if(counter < targetNumber){
		//console.log("keep adding to your plate");
		$("#plateNumber").text(counter);
	} 
	//when user has gone above the targetNumber / budget$, increment losses, ask user if they want to play again. 
	else if(counter > targetNumber){ 
		losses++;
		$(".losses").text("Number of plates to be washed: " + losses);
		alert("You went over the budget! You owe us: $" + (counter - targetNumber) + ".  Now you have to wash the dishes!");
		playAgain();
	}
}

//asks user if they want to play again
function playAgain(){
	var playAgain =	confirm("Do you want to play again?")
	//if user hits "OK", then counters are reset
	if (playAgain){	
		counter = 0;	
		resetCounters();
	// if user hits "Cancel", 
	} else {
		alert("OK, see you again! This window will now close!");
		window.close();
		//close window or show good by picture
	}
}