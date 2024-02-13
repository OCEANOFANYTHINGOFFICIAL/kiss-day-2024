// first find the body tag as a starting point
var body = document.getElementsByTagName('body')[0];

// now create a function to redirect the user to cute-kiss/index.html page
function redirect() {
    window.location = 'cute-kiss/index.html';
}

// now wait for 30 seconds and se a event listenert to the body tag for executing the redirect function
setTimeout( function() {
    body.addEventListener('click', redirect);
}, 30000);