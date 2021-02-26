let header = document.querySelector(".header");
let menu = document.querySelector(".menu");

menu.style.top = header.clientHeight + 'px'; /* размещаем меню под хедером */

let categoriesItem = document.querySelectorAll(".categories__item");

/*
categoriesItem.forEach(function(elem) {
    elem.addEventListener("mouseover", function(){
        let name = this.querySelector(".categories__name");
        name.style.background = this.backgroundColor;
        trx =  this.clientWidth + 'px'
        name.style.transform = 'translateX('+ trx +')'; 
    });
    elem.addEventListener("mouseout", function(){
        let name = this.querySelector(".categories__name");
        trx = name.clientWidth + this.clientWidth + 'px'
        name.style.transform = 'translateX('+ -trx +')'; 
    });
});
*/




