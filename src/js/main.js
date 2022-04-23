import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  dots: true,
  appendArrows: $('.logo__elem-slider'),
  appendDots: $('.logo__elem-slider'),
  swipe: false,
});


import * as menu from "./module/menu.js";
import * as actual from "./module/tabsActual.js";
import * as info from "./module/spoiler.js";
import * as catalog from "./module/catalog";
import * as menuShop from "./module/menuTabsShop";
import * as follow from "./module/followLinkShop";
import * as shop from "./module/bascket";
import * as city from "./module/searchCity";
import * as address from "./module/selectCity";

info.spoiler()
menu.showMenu()
follow.followLink()
shop.getBasket()

if (window.location.pathname == '/' || window.location.href.includes('index') || document.querySelector('.actual')) {
  actual.changeTab()
} else if (window.location.href.includes('basket')) {
  shop.generateBasketPage()
  shop.deletedProduct()
  shop.addOrDelProduct()
  city.searchCity();
  address.selectCity();
} else {
  catalog.selectProduct()
  menuShop.changeTabMenu()
}