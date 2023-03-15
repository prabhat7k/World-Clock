function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

var getTime = (function () {
	const countryUTC = {
		UnitedStates: [-4, 0],
		India: [5, 30],
		UnitedKingdom: [0, 0],
		Japan: [9, 0],
		Canada: [-4, 0],
		Australia: [10, 0],
		Brazil: [-3, 0],
		Mexico: [-5, 0],
		France: [1, 0],
		Russia: [3, 0],
		Spain: [1, 0],
		Germany: [1, 0],
		SouthAfrica: [2, 0],
		Nigeria: [1, 0],
		Argentina: [-3, 0],
		Turkey: [3, 0],
		Italy: [1, 0],
		Pakistan: [5, 0],
		SouthKorea: [9, 0],
		Indonesia: [7, 0],
	};
	return function (key) {
		var country = countryUTC[key];
		return country;
	};
})();

function setUTC() {
	try {
		var country = document.getElementById("selectUTC").value;
		var date = new Date();
		var utcTime = getTime(country);
	} catch (err) {
		return;
	}

	date.setHours(date.getUTCHours() + utcTime[0]);
	date.setMinutes(date.getUTCMinutes() + utcTime[1]);
	date.setSeconds(date.getUTCSeconds());

	var hour = addZero(date.getHours());
	var min = addZero(date.getMinutes());
	var sec = addZero(date.getSeconds());
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	var month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	hhand.style.transform = `rotate(${hour * 30 + min / 2}deg)`;
	mhand.style.transform = `rotate(${6 * min + sec / 10}deg)`;
	shand.style.transform = `rotate(${sec * 6}deg)`;
	//document.getElementById("time").innerHTML = hour + ':' + min + ':' + sec;
	document.getElementById("hr").innerHTML = hour;
	document.getElementById("min").innerHTML = min;
	document.getElementById("sec").innerHTML = sec;
	document.getElementById("fullDate").innerHTML =
		days[date.getDay()] +
		", " +
		month[date.getMonth()] +
		" " +
		date.getDate() +
		", " +
		date.getFullYear();
}

function darkMode() {
	var element = document.getElementById("container");
	element.classList.toggle("dark-mode");
	var element = document.getElementById("footer");
	element.classList.toggle("dark-mode");
	var element = document.body;
	element.classList.toggle("dark-mode");
	var element = document.getElementById("header");
	element.classList.toggle("dark-mode");
	var element = document.getElementById("analog");
	element.classList.toggle("invert");
}

setInterval(setUTC, 1000);
