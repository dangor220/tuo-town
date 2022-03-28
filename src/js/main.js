import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  dots: true,
  appendArrows: $('.logo__elem-slider'),
  appendDots: $('.logo__elem-slider'),
  swipe: false,
});



// import menu
import * as menu from "./module/menu.js";

menu.showMenu()

// import changeTabs for actual
import * as actual from "./module/tabsActual.js";

actual.changeTab()

// import spoiler for info
import * as info from "./module/spoiler.js";

info.spoiler()