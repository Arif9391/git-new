

 // scrol totop button 
 const heroSection = document.querySelector(".section-hero");
 const footerElem = document.querySelector(".section-footer");

 const scrollElement = document.createElement("div");
 scrollElement.classList.add("scrollTop-style");

 scrollElement. innerHTML ='<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>';
footerElem.after(scrollElement);

const scrollTop = () => {
heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

 //-- Initialize Swiper -->
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if(widthSize.matches) {
     new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    
    });
  } 
  else {
   new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
  });
}
};
const widthSize = window.matchMedia("(max-width: 780px)");
myJsmedia(widthSize);
widthSize.addEventListener("change", myJsmedia);

// creating a responsive navbar component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener('click', () => {
headerElem.classList.toggle("active");
});
 // animate number

 const workSection = document.querySelector(".section-work-data");
 const workObserver = new IntersectionObserver(
   (entries, observe) => {
    const [entry] = entries;
    console.log(entry);
  //  if (entry.isIntersecting = false)
  if (entry.isIntersecting) return;
// animate number
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
const updateNumber = () => {
  const targetNumber = parseInt(curElem.dataset.number);
  // console.log(targetNumber);
const initialNum = parseInt (curElem.innerText);
// console.log(initialNum);

const incrementNumber = Math.trunc(targetNumber / speed);
// console.log(incrementNumber);

if (initialNum < targetNumber) {
 curElem.innerText = initialNum + incrementNumber;

 setTimeout(updateNumber, 40);
}
};
updateNumber();
});

   },
   {
    root: null,
    threshold:0,

   }
 );
 workObserver.observe(workSection);

  // creating a sticky responsive component
const ovserver = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      console.log(ent), 
      !ent.isIntersecting
      ? document.body.classList.add("sticky") 
      : document.body.classList.remove("sticky"); 
    },
    {
        root: null,
        threshold:0,
    }
    
    );
    observer.observe(heroSection);

  