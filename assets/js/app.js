const handleCountDown = function () {
	const countdownDate = new Date('2023-12-31T00:00:00').getTime();

	const x = setInterval(function () {
		const now = new Date().getTime();

		const distance = countdownDate - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.querySelector('#card-countdown .card-countdown_days .card-countdown_number').textContent = days;
		document.querySelector('#card-countdown .card-countdown_hours .card-countdown_number').textContent = hours;
		document.querySelector('#card-countdown .card-countdown_minutes .card-countdown_number').textContent = minutes;
		document.querySelector('#card-countdown .card-countdown_seconds .card-countdown_number').textContent = seconds;

		if (distance < 0) {
			document.querySelector('#card-countdown').textContent = 'Hết thời gian đếm ngược';
		}
	}, 1000);
}

window.addEventListener('load', function () {
	handleCountDown();
})
