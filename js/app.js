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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', PopulateNavBar());

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function PopulateNavBar() {
    const navBarList = document.getElementById("navbar__list");
    console.log(navBarList);
    sections.forEach((section) => {
        console.log(section);
        const navListItem = document.createElement("li");
        navListItem.textContent = section.dataset.nav;
        navBarList.appendChild(navListItem);
    });
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


