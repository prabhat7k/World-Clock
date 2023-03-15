setInterval(() => {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	hhand.style.transform = `rotate(${hour * 30 + min / 2}deg)`;
	mhand.style.transform = `rotate(${6 * min + sec / 10}deg)`;
	shand.style.transform = `rotate(${sec * 6 + (6 * ms) / 1000}deg)`;
}, 1000);
