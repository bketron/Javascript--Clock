$(document).ready(function(){

	
	function time(){

		setTimeout(function(){

		var d = new Date();
		var hour = d.getHours()
		var min = d.getMinutes()
		var sec = d.getSeconds()
		var amPm = ''
		var colorHex = ""


		if(hour < 10) {
			hour = "0" + hour
		}

		if(hour > 12) {
			hour = hour - 12
			amPm = "p.m."
		}

		if(hour === 12) {
			hour = 12
			amPm = "p.m."
		}

		if(hour === 0) {
			hour = 1
		}

		if(hour < 12) {
			hour = hour
			amPm = "a.m."
		}

		if(min < 10) {
			min = "0" + min
		}

		if(sec < 10) {
			sec = "0" + sec
		}

		colorHex = hour.toString() + min.toString() + sec.toString()
		colorHex = parseInt(colorHex)

		document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec + " " + amPm
		document.body.style.backgroundColor = `#${colorHex}`

		time()

	},1000)


	}

	time()



})