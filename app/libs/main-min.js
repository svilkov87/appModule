'use strict';

var slider      = document.getElementById( UISlider.sliderId );
var sliderWidth = slider.offsetWidth;
var sliderLists = document.querySelectorAll("#" + UISlider.sliderId + " > li");

    // console.log( sliderLists );
    // console.log( sliderWidth );
    // console.log( images );


// if ( UISlider.type == 'row') {

//     slider.classList.add('b-ui_horizontal');

//     // for( var i = 0; i < sliderLists.length; i++ ) {

//     //     sliderLists[i].style.width = sliderWidth + 'px';

//     // }

// }

function styles( element ) {

    var wrapper     = document.createElement('div');
    var mainWrapper = document.createElement('div');
    var prevArrow   = document.createElement('span');
    var nextArrow   = document.createElement('span');
    var parent      = element.parentNode;

    parent.insertBefore( wrapper, element );
    wrapper.appendChild( element );

    mainWrapper.className = "b-ui-wrapper";
    wrapper.className     = "b-ui-viewport";
    prevArrow.className   = "b-ui-prev";
    nextArrow.className   = "b-ui-next";

    var parentWrapper = wrapper.parentNode;
    var uiWrapper     = document.getElementsByClassName( 'b-ui-wrapper' )[0];

    parentWrapper.insertBefore( mainWrapper, uiWrapper );
    mainWrapper.appendChild( wrapper );

    if ( UISlider.arrows ) {
        mainWrapper.appendChild( prevArrow );
        mainWrapper.appendChild( nextArrow );
    }
}

styles( slider );

function createElement( element ) {

}

