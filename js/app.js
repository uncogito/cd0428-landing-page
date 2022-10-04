const submissionForm = document.getElementById('submission__form');
const sections = document.querySelectorAll('section');
const navBarList = document.getElementById("navbar__list");





/* create navigation bar*/
function PopulateNavBar() {
    sections.forEach((section) => {
        const navListItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = section.dataset.nav;
        navListItem.appendChild(anchor);
        navBarList.appendChild(navListItem);
    });
}

/* scroll to section when nav clicked*/
function scrollOnClick() {
    navBarList.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(section => {
            if (section.dataset.nav === e.target.textContent) {
                /*e.target.classList.add("your-active-class");*/
                section.scrollIntoView({
                    behavior: "smooth"
                })
            }
        })
    })
}
/* alert when submission of form succesfull*/
function displaySubmittedMessage(e) {
    console.log(e);
    e.preventDefault();
    alert("Submission Succesfull");
}

/* sets active section according to user scrolling and active nav item*/
function activateSectionInViewport() {
    window.addEventListener('scroll', () => {
        const navLinks = navBarList.querySelectorAll('li > a');
        function checkIfActive(section) {
            const sectionLocation = section.getBoundingClientRect();
            if (sectionLocation.top < window.innerHeight * 0.5 && sectionLocation.bottom > window.innerHeight * 0.5) {
                section.classList.add("your-active-class");
                for (let i=0; i<navLinks.length; i++ ) {
                    if (navLinks[i].innerHTML === section.dataset.nav) {
                        navLinks[i].classList.add("your-active-class")
                    } else {
                        navLinks[i].classList.remove("your-active-class")
                    }
                }
            } else {
                section.classList.remove("your-active-class");
            }
        }
        sections.forEach(checkIfActive);
    });

}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('DOMContentLoaded', PopulateNavBar);
document.addEventListener('DOMContentLoaded', scrollOnClick);
document.addEventListener('DOMContentLoaded', activateSectionInViewport);
submissionForm.addEventListener('submit', displaySubmittedMessage);
