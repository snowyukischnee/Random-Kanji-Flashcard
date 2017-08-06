let fs = require('fs');
const baseExtsn = 'json';
function readFiles(dirname, onDataEnd, onError) {
	fs.readdir(dirname, (err, filenames) => {
		if (err) {
			onError(err);
			return;
		}
		let data = []
		filenames.forEach((filename) => {
			let parts = filename.split(".");
			if (strComp(parts[parts.length - 1], baseExtsn))
			try {
				let content = fs.readFileSync(dirname + filename, 'utf-8');
				data.push(content);
			} catch (err) {
				onError(err);
				return;
			}
		});
		onDataEnd(data);
	});
}

function strComp(s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	return s1 == s2;
}

readFiles('kanji/', function(data) {
	fs.writeFileSync("js/lib.js", "let KanjiArray = [" + data + "]");
}, (err) => { throw err });