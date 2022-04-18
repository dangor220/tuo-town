import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  dots: true,
  appendArrows: $('.logo__elem-slider'),
  appendDots: $('.logo__elem-slider'),
  swipe: false,
  autoplay: true,
});


import * as menu from "./module/menu.js";
import * as actual from "./module/tabsActual.js"; 
import * as info from "./module/spoiler.js";
import * as catalog from "./module/catalog";
import * as menuShop from "./module/menuTabsShop";
import * as follow from "./module/followLinkShop";

info.spoiler()
menu.showMenu()
follow.followLink()

if (window.location.pathname=='/' || window.location.href.includes('index') || document.querySelector('.actual')) {
  actual.changeTab()
} else {
  catalog.selectProduct()
  menuShop.changeTabMenu()
}





