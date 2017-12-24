/* Instructions: ** Works in Google Chrome **
	1. Open Southwest Check-In page: https://www.southwest.com/air/check-in/
	2. Type in Confirmation Number and Name Information
	3. Open up the Developer Console (View > Developer > JavaScript Console)
	4. Copy and paste this code in the console (change the time) and press Enter.

	Code will click the submit button at exact time you enter, down to the second!
*/

// ADD YOUR FLIGHT TIME HERE (Example: "7:30:00 PM")
var flightTime = "11:00:00 AM";

// Find button on page you need to click to submit
var checkIn = document.getElementById("form-mixin--submit-button");

// Determine Time of Day, and perform action at flightTime
var today = new Date();
var flightDate = (today.getMonth()+1) +'/'+ today.getDate() +'/'+ today.getFullYear();
var flightTimeMil = new Date( flightDate + ' ' + flightTime ).getTime();

timeMil = new Date().getTime();		// gets current time
countDownMil = flightTimeMil - timeMil;	// finds difference in time between current time and flight time

// Set Timer
function checkedIn () {
	checkIn.click();
	console.log ('Successfully checked in.');
};

// Driver Function
setTimeout(checkedIn, countDownMil);
