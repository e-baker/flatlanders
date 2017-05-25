(function() {
	var app = angular.module('store', [ ]);

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
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: ". . .",
			canPurchase: false,
		},
	];

})();