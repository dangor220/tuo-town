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

if (window.location.href.includes('index')) {
  menu.showMenu()
  actual.changeTab()
  
}
info.spoiler()

import * as catalog from "./module/catalog";

if (window.location.href.includes('catalog')) {
  catalog.selectProduct()
}



