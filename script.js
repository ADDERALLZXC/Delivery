// =================== COUNTRY AND LANGUAGE

const language = document.querySelector('.main-language');
      languageList = document.querySelector('.hidden-languages');
language.addEventListener('click', function() {
    languageList.classList.toggle('visible-flex');
});

const country = document.querySelector('.country-profile'),
      countryList = document.querySelector('.hidden-countries');
country.addEventListener('click', function() {
    countryList.classList.toggle('visible-flex');
});

// =================== CONTACT CENTER

const support = document.querySelector('.support'),
      submit = document.querySelector('.submit'),
      popUp = document.querySelector('.contact-showup');
support.addEventListener('click', function() {
    popUp.classList.add('visible');
});
submit.addEventListener('click', function() {
    popUp.classList.remove('visible');
});

// =================== BURGER MENU

const menu = document.querySelector('.burger-icon'),
      nav = document.querySelector('.burger-btns'),
      cross = document.querySelector('.cross-icon');
menu.addEventListener('click', function() {
    nav.classList.add('visible-flex');
});

cross.addEventListener('click', function() {
    nav.classList.remove('visible-flex');
});

// =================== EXPLORE CARD

const locationButtons = document.querySelector('.location-btns'),
      locationInner = document.querySelector('.location__inner'),
      locationCountry = document.querySelectorAll('.location-country'),
      locationCountryList = document.getElementsByClassName('country-list');
      
locationButtons.addEventListener('click', function() {
    locationInner.classList.add('visible');
});

function removeList() {
    let itemClass = this.parentNode.className

    for(i = 0; i < locationCountryList.length; i++){
        locationCountryList[i].className = 'country-list'
    }
    if(itemClass === 'country-list'){
        locationInner.className = 'location__inner'
    }
}

locationCountry.forEach((eq) => {
    eq.addEventListener('click', removeList)
})

// =================== EXPANDER BUTTONS

const express = document.querySelector('.express'),
      logistics = document.querySelector('.logistics'),
      expressExpander = document.querySelector('.expander-express'),
      logisticsExpander = document.querySelector('.expander-logistics');

express.addEventListener('click', function() {
    expressExpander.classList.add('visible');
    logisticsExpander.classList.remove('visible');
    express.classList.add('red-btn');
    express.classList.remove('yellow-btn');
    logistics.classList.remove('red-btn');
});

logistics.addEventListener('click', function() {
    logisticsExpander.classList.add('visible');
    expressExpander.classList.remove('visible');
    express.classList.add('yellow-btn');
    express.classList.remove('red-btn');
    logistics.classList.add('red-btn');
});

// =================== EXPANDER BODY

const expanderHeader = document.getElementsByClassName('expander'),
      expanderBody = document.querySelectorAll('.expander-text');

function toggle(){
    let itemClass = this.parentNode.className

    for(i = 0; i < expanderHeader.length; i++){
        expanderHeader[i].className = 'expander'
    }
    if(itemClass === 'expander'){
        this.parentNode.className = 'expander expander-visible'
    }
}

expanderBody.forEach((el) =>{
    el.addEventListener('click', toggle)
})
