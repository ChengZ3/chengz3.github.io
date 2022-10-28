//**---NAVBAR---**//

//classList -- get all the classes of the element 
//offsetTop -- returns the distance of the current element from its outer border 
window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector("nav");
    const sticky = navbar.offsetTop;
    
    if (window.scrollY > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})


 //**---MODAL(POPUP)---**//
const open = document.getElementById("open");
const container = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    container.classList.add("show");
})
close.addEventListener("click", ()=>{
    container.classList.remove("show");
})

 //**---TABS---**//
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(ele){
    const id = ele.target.dataset.id;
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        ele.target.classList.add("active");

        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})