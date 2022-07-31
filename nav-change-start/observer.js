const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const sectionOneOption = { };

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      header.classList.add("nav-scrolled")
    } else {
      header.classList.remove("nav-scrolled")
    }
  })
},sectionOneOption);

sectionOneObserver.observe(sectionOne);