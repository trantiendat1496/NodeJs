const db = require('../db'); 

module.exports.index = ((req, res) => {
    var page = parseInt(req.query.page) || 1;
	var perPage = 8;

	var start = (page - 1) * perPage;
	var end = page * perPage;

	const link = [];
	if (page == 1) {
		for (let index = 1; index <= 3; index++) {
			link.push("http://localhost:9000/products?page=" + index);
		}
	} else {
		for (let index = page - 1; index <= page + 1; index++) {
			link.push("http://localhost:9000/products?page=" + index);
		}
	}

	//Pagination
	res.render('products', {
		// books: db.get('books').value().slice(start, end)
		products: db.get('products').drop(start).take(perPage).value(),
		links: link
	});

});
