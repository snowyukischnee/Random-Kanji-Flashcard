let Card = (function Card(kanjilist) {
	let kanji;
	let $kanjifield;
	let $kunfield;
	let $onfield;
	let $partfield;
	let $meaningfield;
	let $card;


	function init() {
		$kanjifield = $("#kanji");
		$kunfield = $("#kun");
		$onfield = $("#on");
		$meaningfield = $("#meaning");
		$partfield = $("#part");
		$card = $("#card");
		kanji = kanjilist;
		bindUI();
		newCard();
	}


	function bindUI() {
		$card.on("click", handleClick);  
	}


	function newCard() {
		let newKanji = _.sample(kanji);
		$kanjifield.html(newKanji.name);
		$kunfield.html(newKanji.kun);
		$onfield.html(newKanji.on);
		$meaningfield.html(newKanji.meaning);
		$partfield.html(newKanji.part);
	}


	function handleClick() {
	let tl = new TimelineMax();
	tl.to($card, .3, {
		rotationY: 90
	});
	tl.add(newCard);
	tl.to($card, .3, {
		rotationY: 0
	});
	}


	var api = {
		init: init,
	}
	
	return api;
})(KanjiArray);


window.addEventListener("load", Card.init);