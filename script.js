const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Annimation(){
    let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
});
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
});


let elems = document.querySelectorAll(".elem");
elems.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        var image = val.getAttribute("data-image")
// console.log(image);
        fixed.style.backgroundImage = `url(${image})`
    })
})
}

function page4Annimation(){
    let hOne = document.querySelectorAll(".left h1");
    let rimg = document.querySelector(".page4 .right");
    
    hOne.forEach(function(det){
        det.addEventListener("click", function(){
            let rImage = det.getAttribute("data-img")
            //  console.log(rImage);
            rimg.style.backgroundImage = `url(${rImage})`
        })
    })
    
}
page3Annimation()
page4Annimation()



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
  });