var intro = document.getElementById('intro');
var windowHeight, windowWidth
var me = document.getElementById('me');
var overview = document.getElementById('overview');

console.log(intro.getBoundingClientRect().top / 100);

function SmoothScrollTo(e, time) {
    var eAmt = e.getBoundingClientRect().top / 100;
    console.log(eAmt);
    var curTime = 0;
    while (curTime < time) {
        setTimeout(scroll, curTime, eAmt);
        curTime += time / 100;
    }
}

function scroll(eAmt) {
    window.scrollBy(0, eAmt);
}

function scrollToSalutaion() {
	SmoothScrollTo(me, 333.333333);
}

function scrollToTop() {
	SmoothScrollTo(intro, 333.333333);
}

function getCurrentWindowDimensions() {
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
}

function resize() {
	getCurrentWindowDimensions();
	intro.style.height = windowHeight + 'px';
}

//listen for resize event.
// window.onresize = resize;

// initalize intro dimensions
resize();