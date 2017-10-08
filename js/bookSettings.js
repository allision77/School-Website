flippingBook.pages = [
	"images/99.jpg",
	"images/55.jpg",
	"images/56.jpg",
	"images/57.jpg",
	"images/58.jpg",
	"images/59.jpg",
	"images/60.jpg",
	"images/61.jpg",
	"images/36.jpg",
];


flippingBook.contents = [
	[ "Cover", 1 ],
	[ "Modern", 4 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 826;
flippingBook.settings.bookHeight = 584;
flippingBook.settings.pageBackgroundColor = 0x5b7414;
flippingBook.settings.backgroundColor = 0x83a51c;
flippingBook.settings.zoomUIColor = 0x919d6c;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = false,
flippingBook.settings.zoomImageWidth = 992;
flippingBook.settings.zoomImageHeight = 1403;
flippingBook.settings.downloadURL = "";
flippingBook.settings.flipSound = "";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();
