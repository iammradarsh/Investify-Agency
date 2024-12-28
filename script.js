let big =  document.querySelector("#big>h1");
const drop1 = document.querySelector("#rightnav #invest");
const drop1Select = document.querySelector("#rightnav #investSelect");
const drop2 = document.querySelector("#rightnav #more");
const drop2Select = document.querySelector("#rightnav #moreSelect");
const drop3 = document.querySelector("#rightnav #goals");
const drop3Select = document.querySelector("#rightnav #goalsSelect");
const close =  document.querySelector(".close");
const open =  document.querySelector("#nav-part3");
const navigation = document.querySelector("#main-navigation")


//defining media query
const mediaQuery = window.matchMedia('(max-width:768px')


function exit(){
    open.addEventListener("click", function(){
        navigation.style.display = "flex"

    });
    close.addEventListener("click", function(){
        navigation.style.display = "none"

    });
}
exit();


function loader(){

    document.addEventListener("readystatechange",function(){
        function scrollbarhide(){
            document.body.style.overflow = 'hidden';
        }
        scrollbarhide();
    
    
        function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
    disableScroll();
        if(document.readyState === "complete"){
            setTimeout(loaderHide,300);
            setTimeout(loaderdisplaynone,400);
            function loaderHide(){ 
                document.querySelector(".loader").style.opacity = "0"
            }
            function loaderdisplaynone(){ 
                document.querySelector(".loader").style.display = "none"
            }


            function scrollbarvisible(){
                document.body.style.overflow = 'visible';
            }
            scrollbarvisible();
    
            function enableScroll() {
                window.onscroll = function() {};
            }
            enableScroll();
        }
        
    })
}
loader();

// Animations componenents

const inner_page1 = document.querySelector("#inner-page1");
const page1_poster = document.querySelector("#page1-poster");

// Animations componenents

var flag = 0;

drop1.addEventListener("click",function(){
    if(flag===0){
        console.log("hello")
    drop1Select.click();
    drop1Select.style.display = "block"
    flag = 1

    }else{
        console.log("hello")
    drop1Select.click();
    drop1Select.style.display = "none"
    flag = 0

    }
    


})
drop2.addEventListener("click",function(){
    if(flag===0){
        console.log("hello")
    drop2Select.click();
    
    drop2Select.style.display = "block"
    flag = 1

    }else{
        console.log("hello")
    drop2Select.click();
    drop2Select.style.display = "none"
    flag = 0

    }
    


})
drop3.addEventListener("click",function(){
    if(flag===0){
        console.log("hello")
    drop3Select.click();
    drop3Select.style.display = "block"
    flag = 1

    }else{
        console.log("hello")
    drop3Select.click();
    drop3Select.style.display = "none"
    flag = 0

    }
    


})

// Media Query for different screen sizes

if (mediaQuery.matches){
    ScrollTrigger.create({
        trigger:"#big",
        pin:true,
        start:"top 45%",
        end:"top -100%",
        // markers:true
    })

}else{
    ScrollTrigger.create({
        trigger:"#big",
        pin:true,
        start:"bottom 100%",
        end:"top -180%",
        // markers:true
    })

}


if (mediaQuery.matches) {
    
    
    gsap.to("#big>h1",{
        scale:25,
        opacity:"0",
        scrollTrigger:{
            trigger:big,
            start:"top 50%",
            end:"top 0%",
            // markers:true,
            scrub:2
        },
        ease:Expo.easeIn
    })
    
}
else{
    
    
    gsap.to("#big>h1",{
        scale:25,
        opacity:"0",
        scrollTrigger:{
            trigger:big,
            start:"top 20%",
            end:"top -60%",
            // markers:true,
            scrub:3
        },
        ease:Expo.easeIn
    })
}


//  Animations

gsap.from("#inner-page1 " ,{
    opacity:"0",
    x:"-100%",
    duration:"3" ,
    ease:Expo.easeInOut
})
gsap.from("#page1-poster",{
    opacity:"0",
    x:"100%",
    duration:"3" ,
    ease:Expo.easeInOut
})

//  page 3 animation

    gsap.from(".box",{
        scrollTrigger:{
            trigger:".box",
            start:"top 80%",
            end:"top 40%",
            // markers:true,
            scrub:4
            

        },
        opacity:"0",
        x:"100%",
        stagger:0.065,
        // duration:1.8,
        ease:Expo.easeInOut
    })

//  page 3 animation


    







//  Animations




// page 3 slider 


function slider(){
    const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".imgContainer")[0],
arrowIcons = document.querySelectorAll("#slider i");


let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = function (){
    // Showing and Hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth// getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}


arrowIcons.forEach(function(icon){
    icon.addEventListener("click",function(){
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left , reduce width value from the carousel scroll left else add to it 
        carousel.scrollLeft += icon.id == "left"? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(),60);// calling showIcons after 60ms
    })
});


const autoSlide = function (){
    // if there is no img left to scroll then return from here
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;

    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft){
        // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;


}


const dragStart = function(e) {
    // Updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging =function(e) {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}


const dragStop = function(){
   isDragStart = false;
   carousel.classList.remove("dragging");

   if(!isDragging) return;
   isDragging = false;
   autoSlide();
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);

carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("mouseleave",dragStop);
carousel.addEventListener("touchend",dragStop);

}
slider();