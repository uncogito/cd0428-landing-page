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
const submissionForm = document.getElementById('submission__form');
const sections = document.querySelectorAll('section');

document.addEventListener('DOMContentLoaded', PopulateNavBar);
document.addEventListener('DOMContentLoaded', activateSectionInViewport);

submissionForm.addEventListener('submit', displaySubmittedMessage);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function PopulateNavBar() {
    const navBarList = document.getElementById("navbar__list");
    sections.forEach((section) => {
        const navListItem = document.createElement("li");
        navListItem.textContent = section.dataset.nav;
        navBarList.appendChild(navListItem);
    });
}

function displaySubmittedMessage (e) {
    console.log(e);
    e.preventDefault();
    alert("Submission Succesfull");
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function activateSectionInViewport() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');

        function checkIfActive(section) {
            const sectionLocation = section.getBoundingClientRect();
            if (sectionLocation.top < window.innerHeight * 0.5 && sectionLocation.bottom > window.innerHeight * 0.5) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        }
        sections.forEach(checkIfActive);
    });

}
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


