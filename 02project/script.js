 
 
 let t1 = gsap.timeline({scrollTrigger:{
     trigger:".part01",
    start:"50% 50%",
    end:"100% 50%",
    pin:true,
    scrub:1,
    //markers:true,

}
})

t1.to(".top-content",{
     rotateX: "100deg",
    opacity:0,
    duration:2,

},"p")
 

t1.to(".btmcontent" ,{
    rotateX: "-110deg",
    duration:2,
    opacity:0
},"p")

t1.to(".part01 img" ,{
    height:"100%",
    width:"100%",
    duration:4


},"p")

let t2 = gsap.timeline({scrollTrigger:{
    trigger:".part02",
   start:"10% 30%",
   end:"4% 10%",
   pin:true,
   scrub:3,
    // markers:true
  
}
})

t2.from(".abt img",{
    x:-300,
    opacity:0,
    duration:1,
    pin:true,
    
})

t2.from(".abt-content",{
    opacity:0,
    // delay:4,
    duration:3
})
 
t2.from(".abt-content p",{
    opacity:0,
    
    duration:1,
    x:300
})

t2.from("#service",{
    opacity:0,
    x:-300,
    scrub:3

})

document.querySelector(".hamburger").addEventListener('click',
function(){
    let navBar = document.querySelector('.navmain2')
    navBar.classList.toggle('active')

})


const animate = document.getElementById('animate')
let start = 0;
let img = [];



img[0] ='animate2.jpg'
img[1] = 'animate00.jpg'
img[2] = 'animate001.jpg'
img[3] = 'animatecard03.jpg'




function imageChange(){
    animate.src = img[start];

    if(start < img.length - 1){
        start++;
    }else{
        start = 0;
    }
    setTimeout("imageChange()",3000)
}
window.onload = imageChange;


const clients = document.getElementById('clients')

clients.addEventListener('click',function(){
    clients.style.transform = "translateX() * 100%"


})

const book = document.getElementById('book-now')


book.addEventListener('click',function(){
    let email = document.getElementsByClassName('email')[0].value
let pass = document.getElementsByClassName('pass')[0].value
    if(email === ""|| pass === ""){
        alert('enter valid details')
    }
})