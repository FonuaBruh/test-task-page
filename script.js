const products = [
	{
		image: "./images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "./images/recommended/belt.png",
		title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
		inStock: false,
		availabilityText: "Под заказ",
	},
	{
		image: "./images/recommended/cable2.png",
		title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "./images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "./images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "./images/recommended/belt.png",
		title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
];

const container = document.querySelector(".recommended__container");

products.forEach((product) => {
	const card = document.createElement("div");
	card.classList.add("recommended__card", "card");

	const availabilityImage = product.inStock
		? "./images/UI/greenCheck.svg"
		: "./images/UI/redCheck.svg";

	card.innerHTML = `
	<div class="card__image">
		<img src="${product.image}" alt="${product.title}">
	</div>
	<div class="card__content">
		<p class="card__title">${product.title}</p>
		<div class="availability">
			<img class="availability__image" src="${availabilityImage}">
			<p class="availability__text">${product.availabilityText}</p>
		</div>
		<button class="button">Подробнее</button>
		<div class="card__border"></div>
	</div>
	`;

	container.appendChild(card);
});
