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

const navZero = document.getElementById("nav-zero");
const navOne = document.getElementById("nav-one");
const navTwo = document.getElementById("nav-two");
const navThree = document.getElementById("nav-three");
const navFour = document.getElementById("nav-four");
const navFive = document.getElementById("nav-five");
const navSix = document.getElementById("nav-six");
const navSeven = document.getElementById("nav-seven");
const navEight = document.getElementById("nav-eight");



function navCurrent() {
    const trigger = window.innerHeight * 0.6;
    const defaultPosition = window.innerHeight;
    let sectionZeroPosition;
    let sectionOnePosition;
    let sectionTwoPosition;
    let sectionThreePosition;
    let sectionFourPosition;
    let sectionFivePosition;
    let sectionSixPosition;
    let sectionSevenPosition;
    let sectionEightPosition;


    // VARIABLE ASSIGNMENT

    if (sectionZero) {
        sectionZeroPosition = sectionZero.getBoundingClientRect().top;
    } else {
        sectionZeroPosition = defaultPosition;
    }
    if (sectionOne) {
        sectionOnePosition = sectionOne.getBoundingClientRect().top;
    } else {
        sectionOnePosition = defaultPosition;
    }
    if (sectionTwo) {
        sectionTwoPosition = sectionTwo.getBoundingClientRect().top;
    } else {
        sectionTwoPosition = defaultPosition;
    }
    if (sectionThree) {
        sectionThreePosition = sectionThree.getBoundingClientRect().top;
    } else {
        sectionThreePosition = defaultPosition;
    }
    if (sectionFour) {
        sectionFourPosition = sectionFour.getBoundingClientRect().top;
    } else {
        sectionFourPosition = defaultPosition;
    }
    if (sectionFive) {
        sectionFivePosition = sectionFive.getBoundingClientRect().top;
    } else {
        sectionFivePosition = defaultPosition;
    }
    if (sectionSix) {
        sectionSixPosition = sectionSix.getBoundingClientRect().top;
    } else {
        sectionSixPosition = defaultPosition;
    }
    if (sectionSeven) {
        sectionSevenPosition = sectionSeven.getBoundingClientRect().top;
    } else {
        sectionSevenPosition = defaultPosition;
    }
    if (sectionEight) {
        sectionEightPosition = sectionEight.getBoundingClientRect().top;
    } else {
        sectionEightPosition = defaultPosition;
    }

    // CLASS ADD REMOVE

    if(sectionZero) {
        if (sectionZeroPosition < trigger && sectionOnePosition > trigger) {
            navZero.classList.add("current");
            navZero.scrollIntoView({ behavior: 'smooth'});
        } else {
            navZero.classList.remove("current");
        }
    }
    if(sectionOne) {
        if (sectionOnePosition < trigger && sectionTwoPosition > trigger) {
            navOne.classList.add("current");
            navOne.scrollIntoView({ behavior: 'smooth'});
        } else {
            navOne.classList.remove("current");
        }
    }
    if(sectionTwo) {
        if (sectionTwoPosition < trigger && sectionThreePosition > trigger) {
            navTwo.classList.add("current");
            navTwo.scrollIntoView({ behavior: 'smooth'});
        } else {
            navTwo.classList.remove("current");
        }
    }
    if(sectionThree) {
        if (sectionThreePosition < trigger && sectionFourPosition > trigger) {
            navThree.classList.add("current");
            navThree.scrollIntoView({ behavior: 'smooth'});
        } else {
            navThree.classList.remove("current");
        }
    }
    if(sectionFour) {
        if (sectionFourPosition < trigger && sectionFivePosition > trigger) {
            navFour.classList.add("current");
            navFour.scrollIntoView({ behavior: 'smooth'});
        } else {
            navFour.classList.remove("current");
        }
    }
    if(sectionFive) {
        if (sectionFivePosition < trigger && sectionSixPosition > trigger) {
            navFive.classList.add("current");
            navFive.scrollIntoView({ behavior: 'smooth'});
        } else {
            navFive.classList.remove("current");
        }
    }
    if(sectionSix) {
        if (sectionSixPosition < trigger && sectionSevenPosition > trigger) {
            navSix.classList.add("current");
            navSix.scrollIntoView({ behavior: 'smooth'});
        } else {
            navSix.classList.remove("current");
        }
    }
    if(sectionSeven) {
        if (sectionSevenPosition < trigger && sectionEightPosition > trigger) {
            navSeven.classList.add("current");
            navSeven.scrollIntoView({ behavior: 'smooth'});
        } else {
            navSeven.classList.remove("current");
        }
    }
    if(sectionEight) {
        if (sectionEightPosition < trigger) {
            navEight.classList.add("current");
            navEight.scrollIntoView({ behavior: 'smooth'});
        } else {
            navEight.classList.remove("current");
        }
    }



    




}
  
window.addEventListener('scroll', navCurrent);









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