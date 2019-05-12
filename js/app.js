var intro = document.getElementById('intro');
var windowHeight, windowWidth
var me = document.getElementById('me');
var overview = document.getElementById('overview');

function SmoothScrollTo(e, time, where) {
    var eAmt = e.getBoundingClientRect().top / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(scroll, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function scroll(eAmt, where = "center") {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

function scrollToSalutaion() {
	SmoothScrollTo(me, 325, "top");
}

function scrollToTop() {
	SmoothScrollTo(intro, 325, "top");
}

function getCurrentWindowDimensions() {
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	console.log(windowWidth + ' x ' + windowHeight);
}

function resize() {
	getCurrentWindowDimensions();
	intro.style.height = windowHeight + 'px';
}

//listen for resize event.
window.onresize = resize;

// initalize intro dimensions
resize();