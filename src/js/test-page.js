jQuery("img").hide();
console.log("I ran");
let first = jQuery(".first");
var color = ["red", "orange", "yellow", "green", "blue", "purple"];
let i = 0;
while(true){
    setTimeout(function(){
        //do what you need here
        i = (i+1)%color.length;
        console.log(i);
        first.css("background-color: " + color[i]);
        console.log(first);
    }, 1000);
}