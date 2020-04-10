// init Isotope
var iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function(itemElem) {
        var number = itemElem.querySelector('.number').textContent;
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function(itemElem) {
        var name = itemElem.querySelector('.name').textContent;
        return name.match(/ium$/);
    }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function(event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
        return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[filterValue] || filterValue;
    iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function(event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}

$(document).ready(function() {
    //Change nav background on scroll


    var lastScrollTop = 0;

    $(window).scroll(function(e) {
        var st = $(this).scrollTop();

        if (st > 100) {
            // $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
            $('nav').addClass('scrolled');
            $('nav').removeClass('bg-transparent');

            $('.navbar-brand img').attr('src', 'img/android-icon-48x48.png');
        } else {

            //console.log('scrolling up');
            $('nav').removeClass('scrolled');

            $('.navbar-brand img').attr('src', 'img/logo.svg');

        }
        lastScrollTop = st;
    });

    //Smooth scrolling
    var scrollLink = $('.smooth');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            },
            500
        );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 70;

            if (sectionOffset <= scrollbarLocation) {
                $(this)
                    .parent()
                    .addClass('active');
                $(this)
                    .parent()
                    .siblings()
                    .removeClass('active');
            }
        });
    });
});
var typed = new Typed('.text_move', {
    strings: ['YOUR DREAM IS REAL.', 'We are the best!!!', 'We code to make'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    smartBackspace: true,
    showCursor: false,

});

// Show less and more button
var btnText = document.getElementById("myBtn");
$('#collapseExample,#WebTechonology,#ITsupport.#AI,#IOS').on('shown.bs.collapse', function() {
    $(btnText).html("Read More");

});

$('#collapseExample,#WebTechonology').on('hidden.bs.collapse', function() {
    console.log("Closed");
    $(btnText).html("Read Less");

});