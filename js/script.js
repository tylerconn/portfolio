/* SECTION ELEMENTS */

const sectionZero = document.getElementById("section-zero");
const sectionOne = document.getElementById("section-one");
const sectionTwo = document.getElementById("section-two");
const sectionThree = document.getElementById("section-three");
const sectionFour = document.getElementById("section-four");
const sectionFive = document.getElementById("section-five");
const sectionSix = document.getElementById("section-six");
const sectionSeven = document.getElementById("section-seven");
const sectionEight = document.getElementById("section-eight");


/* BUTTON SCROLLS TO SPECIFIC SECTION */

function menuButtonZero() {
    sectionZero.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonOne() {
    sectionOne.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonTwo() {
    sectionTwo.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonThree() {
    sectionThree.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonFour() {
    sectionFour.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonFive() {
    sectionFive.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonSix() {
    sectionSix.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonSeven() {
    sectionSeven.scrollIntoView({ behavior: 'smooth'});
}
function menuButtonEight() {
    sectionEight.scrollIntoView({ behavior: 'smooth'});
}





// UPDATES THE STYLE OF ACTIVE NAVIGATION BUTTON

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.5;
    let position = 0;
    let positionNext = window.innerHeight;
    const sectionArray = document.getElementsByClassName("scroll-section");
    const buttonArray = document.getElementsByClassName("scroll-button");

    // ASSIGNS POSITIONS TO SECTIONS
    for (let i = 0; i < sectionArray.length; i++) {
        position = sectionArray[i].getBoundingClientRect().top;

        // SETS THE POSITION OF NEXT SECTION IF THERE IS ONE
        if (sectionArray[ i + 1 ]) {
            positionNext = sectionArray[ i + 1 ].getBoundingClientRect().top;
        }

        // APPLIES CURRENT CLASS TO CURRENT SECTION AND REMOVES OTHERS
        if ( position < trigger && positionNext > trigger ) {
            buttonArray[i].classList.add("current");
            buttonArray[i].scrollIntoView({ behavior: 'smooth'});
        } else {
            buttonArray[i].classList.remove("current");
        }

        // RESETS NEXT POSITION
        positionNext = window.innerHeight;

    }
});












// BASIC MOUSE CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px;");
});

// CASE STUDY CARDS CURSOR

const caseList = document.getElementsByClassName("case-item");

for (let i = 0; i < caseList.length; i++) {
    caseList[i].addEventListener("mouseover", () => {
        cursor.classList.add("cursor-eyes");
    });
    caseList[i].addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-eyes");
    });
}

// NAVIGATION CURSOR

const navButtons = document.getElementsByClassName("nav-button");

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("mouseover", () => {
        cursor.classList.add("cursor-jump");
    });
    navButtons[i].addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-jump");
    });
}

// LINKS CURSOR

const links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
        cursor.classList.add("cursor-plane");
    });
    links[i].addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-plane");
    });
}

// NAME CURSOR

const nameBox = document.getElementsByClassName("box-name");

for (let i = 0; i < nameBox.length; i++) {
    nameBox[i].addEventListener("mouseover", () => {
        cursor.classList.add("cursor-face");
    });
    nameBox[i].addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-face");
    });
}



/* Trying to update nav when scrolling */

/*function toggleClassOnScroll() {
    const targetDiv = document.querySelector('.target-div');
    const scrollPosition = window.scrollY; 
    const divTop = targetDiv.getBoundingClientRect().top;
  
    if (divTop < window.innerHeight / 2) {
      targetDiv.classList.add('active');
    } else {
      targetDiv.classList.remove('active');
    }
  }
  
  window.addEventListener('scroll', toggleClassOnScroll);*/


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content 
function menuButton() {

    const currentText = document.querySelector("#menu-button");
    const initialText = "Menu";
    const menuHeight = document.querySelector(".topnav-menu");

    if (currentText.textContent.match(initialText)) {
        currentText.textContent = "Close";
        menuHeight.style.height = "calc(100vh - 2.7rem)";
    } else {
        currentText.textContent = initialText;
        menuHeight.style.height = "0";
    };
}

document.querySelector("#menu-button").addEventListener("click", menuButton);


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 1400)
});

function preload(e) {

}

document.querySelectorAll(".link-load").addEventListener("click", preload);

function preloadAbout() {
    document.querySelector("body").classList.add("preload");
    setTimeout('document.location="http:www.tylerconn.me/about.html"', 3000)
}

*/

/*const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener('click', function menuClick() {
    const initialText = "Menu";

    if (menuToggle.textContent.match(initialText)) {
        menuToggle.textContent = 'Close';
    } else {
        menuToggle.textContent = initialText;
    }
});*/

/* Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}*/


/*

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('.arrow').addClass('fade');
        } else{
            $('.arrow').removeClass('fade');
        }
    })
});
//Go To Top Button Fades
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
      $('.gototop').fadeIn();
    } else {
      $('.gototop').fadeOut();
    }
});
//Go To Top Button Action
$(document).ready(function(){
    $('.gototop').click(function(){
        $(window).scrollTop("body");
    });
});

$(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll > 0) {
        $('#scrollDown').fadeOut();
    } else {
        $('#scrollDown').fadeIn();
    }
});

*/