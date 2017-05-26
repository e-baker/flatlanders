(function() {
	var app = angular.module('gemApp', [ ]);

	app.controller( 'StoreController', function() {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			images: [
				{
					full: 'dodecahedron-01.png',
					thumb: 'dodecahedron-01.png'
				},
				{
					full: 'dodecahedron-01.png',
					thumb: 'dodecahedron-01.png'
				}
			],
			canPurchase: true,
			reviews: [
			{
				stars: 3,
				author: 'JimmyDean@sausage.com',
				body: 'I think this gem was just OK, could honestly use more shine, IMO.'
			},
			{
				stars: 4,
				author: 'gemsRock@alyssaNicoll.com',
				body: 'Any gem with 12 faces is for me!'
			}
			],
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: ". . .",
			canPurchase: false,
		},
	];

	app.controller( "PanelController", function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller( "ReviewController", function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();