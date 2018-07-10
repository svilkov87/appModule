'use strict';

var appModule = ( function() {

    var summ       = 0;
    var goods      = [];
    var menubutton = document.getElementsByClassName('b-phone-screen__touch-menu')[0];
    var menu       = document.getElementsByClassName('b-phone-screen__menu')[0];
    var menuItems  = document.getElementsByClassName('b-phone-screen__list-item');
    var article    = document.getElementsByClassName('b-phone-screen__content')[0];

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
        addProduct: function( product ) {
            summ += product.price;
            goods.push( product );
        },
        printProduct: function () {
            for (var i = 0; i < goods.length; i++) {

                console.log( goods[i].name, goods[i].price );

            }
        }

    };

}());

var salt = {
    name: 'Salt',
    price: '20'
};

appModule.addProduct(salt);
appModule.printProduct();
appModule.activeMenu();
appModule.scrollSection();
