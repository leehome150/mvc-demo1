import $ from "jquery";
import "./app3.css";

const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active"); //有就删掉没有就加上
});
