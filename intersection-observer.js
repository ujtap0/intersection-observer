const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section')

//new IntersectionObserver(callback, options);
//callback: functions itselst is going to call two things
//function(entries, observer){...}
//observer: observer which is referenced back itself

const options = {
  root: null, // it is the viewport
  threshold: 0, //1: it is 100% of the item has to be on the page vs 0: as soon as any little piece of it enters
  rootMargin: "-150px", // it's going to pull root margin in by 150px
};

const observer = new IntersectionObserver(function(entreis, observer){
  entreis.forEach(entry => {
    //only showing the target => prevent observer to fire for everything when the things aren't currently on you page
    if(!entry.isIntersecting) return
    entry.target.classList.toggle('inverse')
    observer.unobserve(entry.target)
  })
}, options);

sections.forEach(section => observer.observe(section))

//let observer observe something
// observer.observe(sectionOne);