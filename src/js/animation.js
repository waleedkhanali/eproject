/////////////////////////CODE FOR SECTION4///////////////////////
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const csstyle1 = document.getElementById('csstying-h1');
      const csstyle2 = document.getElementById('csstying-h2');
      const csstyle3 = document.getElementById('csstying-h3');
      const csstyle4 = document.getElementById('csstying-h4');
      const csstyle5 = document.getElementById('csstying-h5');
      const csstyle6 = document.getElementById('csstying-h6');
      const csstyle7 = document.getElementById('csstying-h7');
      const csstyle8 = document.getElementById('csstying-h8');
      const csstyle9 = document.getElementById('csstying-h9');
    if (entry.isIntersecting) {
      entry.target.classList.add('section4-h2-anim');
      console.log(entry.target)
      //////////Adding class ////////////////
      csstyle1.classList.add('csstyling-h1-anim');
      csstyle2.classList.add('csstyling-h2-anim');
      csstyle3.classList.add('csstyling-h3-anim');
      csstyle4.classList.add('csstyling-h4-anim');
      csstyle5.classList.add('csstyling-h5-anim');
      csstyle6.classList.add('csstyling-h6-anim');
      csstyle7.classList.add('csstyling-h7-anim');
      csstyle8.classList.add('csstyling-h8-anim');
      csstyle9.classList.add('csstyling-h9-anim');
      return;
    }
    ///////////////Removing class//////////////////////////////////////
    entry.target.classList.remove('section4-h2-anim');
    csstyle1.classList.remove('csstyling-h1-anim');
csstyle2.classList.remove('csstyling-h2-anim');
csstyle3.classList.remove('csstyling-h3-anim');
csstyle4.classList.remove('csstyling-h4-anim');
csstyle5.classList.remove('csstyling-h5-anim');
csstyle6.classList.remove('csstyling-h6-anim');
csstyle7.classList.remove('csstyling-h7-anim');
csstyle8.classList.remove('csstyling-h8-anim');
csstyle9.classList.remove('csstyling-h9-anim');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.section4-h2');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));
  /////////////////////////CODE FOR SECTION4///////////////////////
  //////////////////////////-------------------------/////////////////////////////
  //////////////////////////-------------------------/////////////////////////////
  //////////////////////////-------------------------/////////////////////////////
  /////////////////////////CODE FOR SECTION2///////////////////////
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       entry.target.classList.add('section2-line-anim');
       section2_h2.addClass('section2-h2-anim');
       section2_img.addClass('section2-img-anim');
        return;
      }
  
      entry.target.classList.remove('section2-line-anim');
     section2_h2.removeClass('section2-h2-anim');
     section2_img.removeClass('section2-img-anim');

    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const line = document.querySelectorAll('.section2-line');
  const section2_h2 = $('.section2-h2');
  const section2_img = $('.section2-img');
  // Loop over the elements and add each one to the observer
  line.forEach((element) => observer1.observe(element));
  /////////////////////////CODE FOR SECTION2///////////////////////
  //////////////////////////-------------------------/////////////////////////////
  //////////////////////////-------------------------/////////////////////////////
  //////////////////////////-------------------------/////////////////////////////
  /////////////////////////CODE FOR SECTION3///////////////////////
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
     
          document.getElementById("imgsec1").classList.add('imgsec1-anim')
      
          document.getElementById("imgsec2").classList.add('imgsec2-anim')
    
          document.getElementById("imgsec3").classList.add('imgsec3-anim')
     
          document.getElementById("imgsec4").classList.add('imgsec4-anim')
     
          document.getElementById("imgsec5").classList.add('imgsec5-anim')
     
          document.getElementById("imgsec6").classList.add('imgsec6-anim')
      
        return;
      }
  else{
    
      document.getElementById("imgsec1").classList.remove('imgsec1-anim')
 

      document.getElementById("imgsec2").classList.remove('imgsec2-anim')


      document.getElementById("imgsec3").classList.remove('imgsec3-anim')


      document.getElementById("imgsec4").classList.remove('imgsec4-anim')

 
      document.getElementById("imgsec5").classList.remove('imgsec5-anim')

 
      document.getElementById("imgsec6").classList.remove('imgsec6-anim')

      

  }
     

    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const imgsec1 = document.querySelectorAll('.section3');
  console.log(imgsec1)
  // Loop over the elements and add each one to the observer
  imgsec1.forEach((element) => observer2.observe(element));
  // script for coming up section word start
  setInterval(function(){
    const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
span.addEventListener('click', (e) => {
e.target.classList.add('active');
});
span.addEventListener('animationend', (e) => {
e.target.classList.remove('active');
});

// Initial animation
setTimeout(() => {
span.classList.add('active');
}, 750 * (idx+1))
});
  },5000)
  // script for coming up section word end