export function changeTabMenu() {
	const actualTabs = document.querySelector(".shop__menu");
	const allTabs = document.querySelectorAll(".shop__item-link");

	const itemName = document.querySelectorAll(".shop__item-name");
	const itemList = document.querySelectorAll(".shop__item-list");

	const title = document.querySelector(".shop__title");

	const actualContent = document.querySelectorAll(".catalog__shop-products");

	let selectProduct = localStorage.getItem("selectProductElem");

	if (selectProduct) {
		allTabs.forEach((elem) => {
			elem.classList.remove("shop__item-link_active");

			if (elem.dataset.catalog === selectProduct) {
				title.innerHTML = elem.textContent;

				elem.classList.add("shop__item-link_active");

				itemName.forEach((elem) => {
					elem.classList.remove("shop__item-name_active");
				});
				itemList.forEach((elem) => {
					elem.classList.remove("shop__item-list_active");
				});
				const productName = elem.parentNode.parentNode.previousElementSibling;
				const productList = elem.parentNode.parentNode;

				productName.classList.add("shop__item-name_active");
				productList.classList.add("shop__item-list_active");
			}
		});

		actualContent.forEach((item) => {
			if (item.dataset.catalog === selectProduct) {
				item.classList.add("catalog__shop-products_active");
			} else {
				item.classList.remove("catalog__shop-products_active");
			}
		});
	}

	actualTabs.addEventListener("click", (e) => {
		e.preventDefault();

		let tabValue = e.target.dataset.catalog;

		if (e.target.classList.contains("shop__item-link")) {
			title.innerHTML = e.target.textContent;

			allTabs.forEach((elem) => {
				elem.classList.remove("shop__item-link_active");
			});

			e.target.classList.add("shop__item-link_active");

			actualContent.forEach((item) => {
				if (item.dataset.catalog === tabValue) {
					item.classList.add("catalog__shop-products_active");
				} else {
					item.classList.remove("catalog__shop-products_active");
				}
			});
		}
	});
}
