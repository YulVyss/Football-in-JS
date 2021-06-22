window.onload = function () {
	const fieldWidth = $('.wrapper').width(); // ширина поля
	const fieldHeight = $('.wrapper').height(); // высота поля
	const ballDiametr = $('.ball').width(); // диаметр мяча
	const gateTop = fieldHeight / 3; // верхний край ворот
	const gateBottom = fieldHeight / 3 * 2 - ballDiametr; // нижний край ворот
	let x;
	let counterL = 0;
	let counterR = 0;
	$('.countL').text(counterL);
	$('.countR').text(counterR);
	let position = $('.ball').position();

	function getRandom() {
		x = Math.floor(Math.random() * (fieldHeight - ballDiametr));
	}
	function isGoal() {
		if (x > gateTop && x < gateBottom) {
			counter();
			alert('Гоооол!');
		}
	}
	function counter() {
		position = $('.ball').position();
		position.left ? $('.countR').text(++counterR) : $('.countL').text(++counterL);
	}

	$('.ball').click(function () {
		getRandom(x);
		position = $('.ball').position();
		$(this).animate({
			top: x,
			left: position.left ? 0 : fieldWidth - ballDiametr
		}, 300, isGoal);
	})

	let start = new Date();
	setInterval(function () {
		let x = Math.round((new Date() - start) / 1000);
		let h = Math.round(x / 3600);
		let m = parseInt((x % 3600) / 60);
		let c = (x % 3600) % 60;
		c = (c < 10) ? ('0' + c) : c;
		m = (m < 10) ? ('0' + m) : m;
		$('.time_counter').text(h + ':' + m + ':' + c);
	}, 1000)
};