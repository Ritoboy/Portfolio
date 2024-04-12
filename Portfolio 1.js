/*EACH PROJECT PAGE NAVIGATION*/
const returnHomeBtn = document.querySelector('.return-main-page-link');
const rightSection = document.querySelector('.portfolio');
const leftSection = document.querySelector('.personal-info-container');
const cvDesign = document.querySelector('.cv-container');
const webDesign = document.querySelector('.web-design-container');
const graphicsDesign = document.querySelector('.graphics-design-container');


function cvPage() {
    rightSection.style.display = 'none';
    cvDesign.style.display = 'block'; 
};
function webDesignPage() {
    rightSection.style.display = 'none';
    webDesign.style.display = 'block'; 
    if (screen > 800) {
        webDesign.style.display = 'flex';;
    }
};
function graphicsDesignPage() {
    rightSection.style.display = 'none';
    graphicsDesign.style.display = 'block'; 
};
function returnHome() {
    cvDesign.style.display = 'none';
    graphicsDesign.style.display = 'none';
    webDesign.style.display = 'none';
    rightSection.style.display = 'block';
};
/*END OF PROJECT PAGES NAVIGATION */


/*SCROLL UP*/
const goTop = document.querySelector('.back-to-top');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};
function up() {
    document.documentElement.scrollTop = 0;
};
/*END*/

/*GRAPHICS DESIGN IMAGES*/
function displayCd(imgs) {
    let imgDisplay = document.getElementById('showImg-cd');
    imgDisplay.src = imgs.src;
}
function displayPs(imgs) {
    let imgDisplayPs = document.getElementById('showImg-ps');
    imgDisplayPs.src = imgs.src;
}
/*END*/

/*Greeting JS*/
const greetingMsg = document.querySelector('.greeting-msg');
if (new Date().getHours() < 12) {
    greetingMsg.innerHTML = 'Good morning Boss!';
} else if (new Date().getHours() < 18) {
    greetingMsg.innerHTML = 'Good afternoon Boss!';
} else {
    greetingMsg.innerHTML = 'Good evening Boss!';
};