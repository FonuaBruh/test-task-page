const products = [
	{
		image: "images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "images/recommended/belt.png",
		title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
		inStock: false,
		availabilityText: "Под заказ",
	},
	{
		image: "images/recommended/cable2.png",
		title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "images/recommended/cable.png",
		title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
	{
		image: "images/recommended/belt.png",
		title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
		inStock: true,
		availabilityText: "В наличии 50 м.",
	},
];

const container = document.querySelector(".recommended__container");

function renderCards() {
	container.innerHTML = "";

	let productsToShow = products;

	if (window.innerWidth <= 576) {
		productsToShow = products.slice(0, 4);
	}

	productsToShow.forEach((product) => {
		const card = document.createElement("div");
		card.classList.add("recommended__card", "card");

		const availabilityImage = product.inStock
			? "images/UI/greenCheck.svg"
			: "images/UI/redCheck.svg";

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
}

document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.getElementById("toggleButton");
	const targetElement = document.getElementById("targetElement");
	const buttonImage = toggleButton.querySelector("img");

	toggleButton.addEventListener("click", function () {
		if (targetElement.classList.contains("hidden")) {
			targetElement.classList.remove("hidden");
			buttonImage.src = "images/UI/menu_icon_close.svg";
			buttonImage.alt = "Close menu";
		} else {
			targetElement.classList.add("hidden");
			buttonImage.src = "images/UI/menu_icon_open.svg";
			buttonImage.alt = "Open menu";
		}
	});
});

function handleNavigationVisibility() {
	const targetElement = document.getElementById("targetElement");
	const toggleButton = document.getElementById("toggleButton");
	const buttonImage = toggleButton.querySelector("img");

	if (window.innerWidth < 1160) {
		targetElement.classList.add("hidden");
		buttonImage.src = "images/UI/menu_icon_open.svg";
		buttonImage.alt = "Open menu";
	} else {
		targetElement.classList.remove("hidden");
		buttonImage.src = "images/UI/menu_icon_open.svg";
		buttonImage.alt = "Open menu";
	}
}

handleNavigationVisibility();
renderCards();

window.addEventListener("resize", handleNavigationVisibility);
window.addEventListener("resize", renderCards);
