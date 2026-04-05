//your JS code here. If required.
function daysOfAYear(year){
	let isleap = false;
	if(year % 4==0 && year % 100 !==0 || year % 400 == 0){
		isleap = true;
	}
	return isleap ? 366: 365;
}
// let year = prompt("enter year");
// alert(daysOfAYear(year));