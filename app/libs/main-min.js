'use strict';

var appModule = ( function() {

    var menubutton   = document.getElementsByClassName('b-phone-screen__touch-menu')[0];
    var menu         = document.getElementsByClassName('b-phone-screen__menu')[0];
    var menuItems    = document.getElementsByClassName('b-phone-screen__list-item');
    var article      = document.getElementsByClassName('b-phone-screen__content')[0];
    var products     = document.getElementsByClassName('b-phone-screen__product');
    var total        = document.getElementsByClassName('b-phone-screen__total')[0];
    var basket       = document.getElementsByClassName('b-phone-screen__basket')[0];
    var productArray = [];

    return {

        scrollSection: function(){
            for (var i = 0; i < menuItems.length; i++) {

                menuItems[i].addEventListener('click', function(){

                    article.classList.remove('b-phone-screen__content_active');
                    menu.classList.remove('b-phone-screen__menu_active');

                    var sectionId = document.getElementById(this.getAttribute('data-list'));
                    sectionId.scrollIntoView({ behavior: 'smooth', block: 'end' });

                });

            }
        },
        activeMenu: function() {

            menubutton.addEventListener('click', function(){
                article.classList.toggle('b-phone-screen__content_active');
                menu.classList.toggle('b-phone-screen__menu_active');
            });

        },
        activeBasket: function() {

            total.addEventListener('click', function(){
                basket.classList.toggle('b-phone-screen__basket-active');
                article.classList.toggle('b-phone-screen__content-move');
                menubutton.classList.toggle('b-phone-screen__touch-menu_state_disabled');
            });

        },
        chooseProduct: function () {

            var count            = 0;
            var totalPrice       = document.createElement('div');
            totalPrice.className = "b-phone-screen__basket-price";
            basket.appendChild( totalPrice );

            for (var i = 0; i < products.length; i++) {

                products[i].addEventListener('click', function(){

                    var totalString = document.createElement('div');
                    totalString.className = "b-phone-screen__basket-total";
                    totalString.setAttribute('data-total-price', this.getAttribute('data-price') );
                    basket.appendChild( totalString );

                    count++;

                    totalString.innerHTML = this.firstElementChild.innerHTML + ', Стоимость: ' + this.getAttribute('data-price') + '$';
                    totalPrice.innerHTML = Number(this.getAttribute('data-price')) + Number(totalPrice.innerHTML);
                    total.innerHTML = count;
                    total.classList.add('b-phone-screen__total-active');

                });

            }
        }
    };

}());

appModule.chooseProduct();
appModule.activeMenu();
appModule.activeBasket();
appModule.scrollSection();
