let header = document.querySelector(".header");
let menu = document.querySelector(".menu");
let content = document.querySelector(".content");
let aside = document.querySelector(".menu");


menu.style.top = header.clientHeight + 'px'; /* размещаем меню под хедером */
content.style.paddingTop = header.clientHeight + 10 + 'px'; /* размещаем контент под хедером */

let categoriesItem = document.querySelectorAll(".categories__item");




