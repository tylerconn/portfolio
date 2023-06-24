/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuButton() {
    document.querySelector(".topnav").classList.toggle("topnav-open");

    const currentText = document.querySelector("#menu-button");
    const initialText = "Menu";
    const menuHeight = document.querySelector(".topnav-menu");

    if (currentText.textContent.match(initialText)) {
        currentText.textContent = "Close";
        menuHeight.style.height = "calc(100vh - 3.5rem)";
    } else {
        currentText.textContent = initialText;
        menuHeight.style.height = "0";
    }
};

document.querySelector("#menu-button").addEventListener("click", menuButton);
 
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
//preloader
$(window).on("load", function() {
    $('.preloader').fadeOut("slow");
    setTimeout(fade, 8000);
});
