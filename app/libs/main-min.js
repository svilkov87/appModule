'use strict';

const slider      = document.getElementById( UISlider.sliderId );
const sliderWidth = slider.offsetWidth;
const sliderLists = document.querySelectorAll("#" + UISlider.sliderId + " > li");
const sliderImg   = document.querySelectorAll("#" + UISlider.sliderId + " > li > img");

function settings( element ) {

    const wrapper     = document.createElement('div');
    const mainWrapper = document.createElement('div');
    const pagerWrapper = document.createElement('div');
    const prevArrow   = document.createElement('span');
    const nextArrow   = document.createElement('span');
    const parent      = element.parentNode;

    parent.insertBefore( wrapper, element );
    wrapper.appendChild( element );

    mainWrapper.className  = "b-ui-wrapper";
    wrapper.className      = "b-ui-viewport";
    pagerWrapper.className = "b-ui-pager-wrapper";
    prevArrow.className    = "b-ui-prev";
    nextArrow.className    = "b-ui-next";

    const parentWrapper = wrapper.parentNode;
    const uiWrapper     = document.getElementsByClassName( 'b-ui-wrapper' )[0];

    parentWrapper.insertBefore( mainWrapper, uiWrapper );
    mainWrapper.appendChild( wrapper );
    mainWrapper.appendChild( pagerWrapper );

    for (var i = 0; i < sliderImg.length; i++) {

        pagerWrapper.innerHTML += '<div class="b-ui-pager" data-index-pager="'+ i +'"></div>';
        sliderImg[i].setAttribute('data-index-slider', ''+ i + '');

    }
    if ( UISlider.arrows ) {
        wrapper.appendChild( prevArrow );
        wrapper.appendChild( nextArrow );
    }

    let sliderWidthArray = [];
    sliderWidthArray.push(sliderWidth);
    sliderWidthArray = [sliderWidthArray.pop()];

    window.addEventListener('resize', function() {

        sliderWidthArray = [];

        const elemWidth = slider.offsetWidth;

        sliderWidthArray.push(elemWidth);
        sliderWidthArray = [sliderWidthArray.pop()];

    } );


    let nextClickcount = 0;
    let prevClickcount = 0;
    let arrowClickCount = 0;
    let positionArray = [];

    nextArrow.addEventListener('click', function () {

        arrowClickCount++;

        // if (arrowClickCount >= sliderImg.length) {
        //     return false;
        // } else {
            positionArray.push(sliderWidthArray[0] * arrowClickCount)
            positionArray = [positionArray.pop()];
            slider.style.transform = 'translate3d(' + '-' + positionArray[0] + 'px, 0, 0)';
        // }

        // console.log(arrowClickCount);
        // console.log(positionArray);

    } );

    prevArrow.addEventListener('click', function () {

        arrowClickCount--;

        // if (arrowClickCount >= sliderImg.length) {
        //     return false;
        // } else {
            let slideLeft = (sliderWidthArray[0] * arrowClickCount);
            slider.style.transform = 'translate3d(' + '-' + slideLeft + 'px, 0, 0)';
        // }

        // let longer = positionArray

        console.log(arrowClickCount);
        console.log(slideLeft);

        // slider.style.transform = 'translate3d(' + sliderWidthArray[0] + 'px, 0, 0)';
        // slider.style.transform = 'translate3d(' + positionArray[0] + '-930' + 'px, 0, 0)';

    } );

}

settings( slider );

