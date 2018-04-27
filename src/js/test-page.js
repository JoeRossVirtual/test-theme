jQuery("img").hide();
let first = jQuery(".first");
var color = ["red", "orange", "yellow", "green", "blue", "purple"];
let i = 0;
setTimeout(function(){
    //do what you need here
    i = (i+1)%color.length;
    first.css("background-color: " + color[i])
}, 1000);
