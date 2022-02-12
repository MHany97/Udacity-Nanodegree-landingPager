/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


const navigation = document.getElementById("navbar__list"); // getting navigation element
const sections = document.querySelectorAll("section"); // selection al sections
let Nav = ''; //variable will be writtin into HTML for  navigation bar
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav




for (let i = 0; i < sections.length; i++) {

    var dataofsections = sections[i].dataset.nav; //variable that gets data-nav attribute of each section
    Nav += `<li><a class= "menu__link" id= "${sections[i].id}Nav" href="#${sections[i].id}">${dataofsections}</a></li>`;

}
navigation.innerHTML = Nav;
//loop for all sections by forEach Method getting all id from sections array



// Add class 'active' to section when near top of viewport

//function used for removing or adding active classes 

onscroll = function() {

    var position = document.documentElement.scrollTop;

    sections.forEach(section => {

        if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) { //getting postions of element


            for (let a = 0; a < sections.length; a++) {

                if (sections[a].id == section.id) { //checking th
                    sections[a].classList.add('your-active-class');
                    document.getElementById(`${sections[a].id}Nav`).style.color = '#fff'; //styling the hover based on the current viewed section
                    document.getElementById(`${sections[a].id}Nav`).style.background = '#333';


                } else {
                    sections[a].classList.remove('your-active-class') // removing active class from not sections which not viewed 
                    document.getElementById(`${sections[a].id}Nav`).style.background = '#fff';
                    document.getElementById(`${sections[a].id}Nav`).style.color = '#333';
                }

            }
        }
    })
}






// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
function handels(a) {

    a.preventDefault();
    const href = this.getAttribute("href"); // getting hyperlink element from HTML after builfing the navigation bar
    let offsetTop = document.querySelector(href).offsetTop; // get distance of the current element to Top
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

const links = document.querySelectorAll(".navbar__menu ul a"); //getting all links to be clicked for scrolling
for (link of links) {
    link.addEventListener("click", handels);

} // Also we can get smooth scrolling using css Property on HTML     scroll-behavior: smooth;


// Set sections as active