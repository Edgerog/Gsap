function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotive()

var crsr = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove",function(e){
crsr.style.left = e.x + 20 + "px"
crsr.style.top = e.y + 20 +"px"
})

gsap.from("nav" ,{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:1
})

function breakText (){
    var heading = document.querySelector("#page1-btm h1")
    var text = heading.textContent;
    
    var splittedText = text.split("");
    
    var clutter = "";
    
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    heading.innerHTML = clutter;
}
breakText()


gsap.from("#page1-btm h1 span",{
    duration:0.1,
    delay:0.1,
    opacity:0,
    stagger:0.2,
    
    }
    ,"-=1")
    
    gsap.from("#page1 video",{
        delay :0.1,
        scale:0.3,
        duration:1.5,
        opacity:0,
        borderRadius: '200px'
    },)

function h3Text (){
    var h1 = document.querySelector("#page1-btm h3" )
    var text = h1.textContent;
    
    var splittedText = text.split("");
    
    var clutter = "";
    
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    h1.innerHTML = clutter;
}
h3Text()

gsap.from("#page1-btm h3 span",{
    y:-50,
    duration:0.1,
    delay:0.1,
    opacity:0,
    scale:0.2,
    stagger:0.1,
}
,"aims")

function paraBreakText (){
    var heading = document.querySelector("#page1-btm p")
    var text = heading.textContent;
    
    var splittedText = text.split(" ");
    
    var clutter = " ";
    
    splittedText.forEach(function(e){
        clutter += `<span> ${e} </span>`
    })
    heading.innerHTML = clutter;
}
paraBreakText()

gsap.from("#page1-btm p span",{
    y:-50,
    delay:0.2,
    opacity:0,
    color:"gray",
    stagger:0.1,
}
,"aims")




var clutter = " ";
document.querySelector("#page2-h1>h1").textContent.split(" ").forEach(function(e){
    clutter +=` <span>${e}</span> `

document.querySelector("#page2-h1>h1").innerHTML = clutter;
})
gsap.to("#page2-h1>h1>span",{
    scrollTrigger:{
        trigger:`#page2-h1>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:1,
        delay:5
    },
    stagger:0.1,
    color:'#fff'
})
gsap.from("#page2-ul>ul" ,{
    y:20,
    duration:3,
    delay:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:`#page2-h1>ul`,
        start: 500,
        end:10,
        scroller:`#main`,
        scrub:8,
    },
    stagger:0.9,
}
)
function elevate(){
    var h3 = document.querySelector("#det-h3" )
    var text = h3.textContent;
    
    var splittedText = text.split(" ");
    
    var clutter = " ";
    
    splittedText.forEach(function(e){
        clutter += `<span> ${e}</span>`
    })
    h3.innerHTML = clutter;
}
elevate()
gsap.from("#det-h3" ,{
    y:100,
    duration:0,
    delay:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:`#det-h3`,
        start: 110,
        end:`bottom top`,
        scroller:`#main`,
        scrub:8,
    },
    stagger:0.1,
}
)
function elevateP(){
    var h3 = document.querySelector("#det-p" )
    var text = h3.textContent;
    
    var splittedText = text.split(" ");
    
    var clutter = " ";
    
    splittedText.forEach(function(e){
        clutter += `<span> ${e} </span>`
    })
    h3.innerHTML = clutter;
}
elevateP()
gsap.from("#det-p" ,{
    y:100,
    duration:0.01,
    delay:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:`#det-p`,
        start: `top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:3,
        color:"gray"
    },
    stagger:0.1,
}
)
gsap.from("#card",{
    scale:0,
    x:200,
    duration:4,
    delay:2,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:`#card`,
        start: 570,
        end:100,
        scroller:`#main`,
        scrub:6,
    },
    stagger:0.1,
},"-=1")
gsap.from("#btnBy",{
    y:100,
    duration:2,
    delay:2,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:`#card-container`,
        start: 700,
        end:100,
        scroller:`#main`,
        scrub:5,
    },
    stagger:0.2,
},"-=1")

// PAGE3
// PAGE3
// PAGE3
// PAGE3


var boxes = document.querySelectorAll(".box");

boxes.forEach(function(elem){
  elem.addEventListener('mouseenter', function(){
    var att = elem.getAttribute("data-image");
    elem.style.backgroundColor = "black";
    elem.style.color = "white";
    crsr.style.height = "200px";
    crsr.style.width = "270px";
    crsr.style.borderRadius = "10px";
    crsr.style.backgroundImage = `url(${att})`;
    crsr.style.mixBlendMode = "normal";
    crsr.style.boxShadow = "10px 10px";
    crsr.style.zIndex = "9";
  });

  elem.addEventListener('mouseleave', function(){
    elem.style.backgroundColor = "";
    elem.style.color = "";
    crsr.style.width = "10px";
    crsr.style.height = "10px";
    
    // var rect = e.getBoundingClientRect();
    // crsr.style.left = rect.left + window.scrollX + 20 + "px";
    // crsr.style.top = rect.top + window.scrollY + 20 + "px";

    crsr.style.borderRadius = "";
    // crsr.style.backgroundImage = "none";
    crsr.style.mixBlendMode = "difference";
    // crsr.style.zIndex = "9";
    // crsr.style.display = "none";
  });
});




