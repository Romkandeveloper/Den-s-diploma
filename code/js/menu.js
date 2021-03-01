let menuAside = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let contentMain = document.querySelector(".content");

menuBtn.addEventListener("click",function(){
    menuAside.style.top = header.clientHeight + 'px'; /* размещаем меню под хедером */
    menuAside.classList.toggle("menu__active");
    contentMain.classList.toggle("content__active");
});