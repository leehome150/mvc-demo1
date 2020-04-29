import $ from "jquery";
import "./app4.css";

const $square = $("#app4 .circle");

$square
  .on("mouseenter", () => {
    $square.addClass("active");
  })
  .on("mouseleave", () => {
    $square.removeClass("active");
  });
