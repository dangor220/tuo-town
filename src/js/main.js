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