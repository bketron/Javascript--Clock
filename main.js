$(document).ready(function(){

	
	function time(){

		setTimeout(function(){

		var d = new Date();
		var hour = d.getHours()
		var min = d.getMinutes()
		var sec = d.getSeconds()
		var amPm = ""
		var colorHex = ""


		if(hour > 12) {
				if ( (hour - 12) < 10 ){
					hour = "0" + (hour - 12)
				} else {
					hour = hour - 12
				}

			amPm = "pm"
		} else if( hour === 12 ){
			amPm = "pm"
		} else if( hour === 0) {
			hour = 12
			amPm = "am"
		} else if ( hour < 12) {

			if(hour < 10){
				hour = "0" + hour
				amPm = "am"
			} else {
				hour = hour
				amPm = "am"
			}
		} 

		if(min < 10) {
			min = "0" + min
		}

		if(sec < 10) {
			sec = "0" + sec
		}

		colorHex = "#" + hour.toString() + min.toString() + sec.toString()


		var weekDay = d.getDay()
		var month = d.getMonth()
		var date = d.getDate()


		if( weekDay === 0 ){
			weekDay = "Sunday"

		} else if( weekDay === 1){
			weekDay = "Monday"

		} else if( weekDay === 2){
			weekDay = "Tuesday"
			
		} else if( weekDay === 3){
			weekDay = "Wednesday"
			
		} else if( weekDay === 4){
			weekDay = "Thursday"
			
		} else if( weekDay === 5){
			weekDay = "Friday"
			
		} else if( weekDay === 6){
			weekDay = "Saturday"
			
		}


		if( month === 0) {
			month = "January"

		} else if( month === 1) {
			month = "February"

		} else if( month === 2) {
			month = "March"
			
		} else if( month === 3) {
			month = "April"
			
		} else if( month === 4) {
			month = "May"
			
		} else if( month === 5) {
			month = "June"
			
		} else if( month === 6) {
			month = "July"
			
		} else if( month === 7) {
			month = "August"
			
		} else if( month === 8) {
			month = "September"
			
		} else if( month === 9) {
			month = "October"
			
		} else if( month === 10) {
			month = "November"
			
		} else if( month === 11) {
			month = "December"
			
		}



		if( date === 1 || date === 21 || date === 31 ) {
			date = date + "st"

		} else if( date === 2 || date === 22 ) {
			date = date + "nd"

		} else {
			date = date + "th"

		}


		document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec
		document.getElementById("timeOfDay").innerHTML = "" + amPm
		document.getElementById("calender").innerHTML = weekDay + ", " + month + " " + date
		$("body").css("background-color", colorHex)

		time()

	},1000)


	}

	time()



})