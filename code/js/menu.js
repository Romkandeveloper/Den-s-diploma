let menuAside = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let contentMain = document.querySelector(".content");
let contentArticle = document.querySelector(".article");

menuBtn.addEventListener("click",function(){
    menuAside.style.top = header.clientHeight + 'px'; /* размещаем меню под хедером */
    menuAside.classList.toggle("menu-active");
    contentMain.classList.toggle("content-active");
    contentArticle.classList.toggle("article-active")
});