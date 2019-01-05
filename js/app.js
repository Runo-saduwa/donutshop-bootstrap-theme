document.getElementById('cart-info').addEventListener('click', function() {
	const cart = document.getElementById('cart');
	cart.classList.toggle('show-cart');
});

//scroll spy functionality
$('body').scrollspy({ target: '#main-nav' });
//add smooth scrolling
$('#main-nav a').on('click', function(e) {
	// check for # value
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		//animate smooth scroll

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			900,
			function() {
				window.location.hash = hash;
			}
		);
	}
});

//filter button functionality
(function() {
	//select all the buttons
	const filterBtn = document.querySelectorAll('.filter-btn');

	//add eventListener to all the butttons

	filterBtn.forEach(function(btn) {
		btn.addEventListener('click', function(event) {
			event.preventDefault();

			//get the attribute of the button
			const value = event.target.dataset.filter;

			//get all the store items
			const storeItems = document.querySelectorAll('.store-item');

			//loop through each of the store item and check if its classList contains
			// the same value as const 'value'
			storeItems.forEach(function(item) {
				if (value === 'all') {
					item.style.display = 'block';
				} else {
					if (item.classList.contains(value)) {
						item.style.display = 'block';
					} else {
						item.style.display = 'none';
					}
				}
			});
		});
	});
})();

//search box functionality (filter by search)
(function() {
	//select the search input box

	const search = document.getElementById('search-item');

	search.addEventListener('keyup', function() {
		//get the search value
		let value = search.value.toLowerCase().trim();

		//select all the store items items
		const storeItems = document.querySelectorAll('.store-item');

		//Using the includes method to check if any input letter is in the dataset
		//it works, but is not too accurate and specific
		/*  storeItems.forEach(function(item){
           let type = item.dataset.item;
           if(type.includes(value)){
             item.style.display = 'block';
           }else{
               item.style.display = 'none';
           }
       });
       */

		//Using effective method
		storeItems.forEach(function(item) {
			let type = item.dataset.item;
			//get the lenght of the value
			let length = value.length;

			let match = type.slice(0, length);

			if (value === match) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	});
})();



