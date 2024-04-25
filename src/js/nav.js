////////////First we check the inner width of navbar
if(window.innerWidth > 500){
    const heading = document.getElementById("heading1");
var navbar = document.getElementById("navbar");
document.addEventListener("scroll",function(){
    // Get the total height of the document
const docHeight = document.body.offsetHeight;

// Get the current scroll position
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// Calculate the percentage of the scroll position
const percent = (scrollTop / (docHeight - window.innerHeight)) * 100;

// Update the progress bar with the calculated percentage
document.getElementById("scroll-progress").style.width = `${percent}%`;
    if(scrollY>300){
        if(navbar.classList[1] !== "res-navbar"){
        scrollBy(0,10)}
        navbar.classList.add ("res-navbar");
       heading.classList.add("res-heading1");
       
        console.log(navbar.classList[1])
       
    }
    else{
        heading.classList.remove("res-heading1");
        navbar.classList.remove ("res-navbar");
    
    }
})
}
////////////Second we check the inner height of navbar

if(window.innerWidth<500){
    
    $('.navbar').hide();
$('.bars').click(function (e) { 
    $('.navbar').toggle();
    
});
}