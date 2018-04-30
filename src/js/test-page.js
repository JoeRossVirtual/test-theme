jQuery("img").hide();
console.log("I ran");
let first = jQuery(".first");
var color = ["red", "orange", "yellow", "green", "blue", "purple"];
let i = 0;
first.html("This is a staging test 1.")
setInterval(function(){
    //do what you need here
    first.css("background-color", color[i]);
    i = (i+1)%color.length;
}, 1000);