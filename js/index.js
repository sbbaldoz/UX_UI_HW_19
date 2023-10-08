console.log("Your index.js file is loaded correctly");

$("button").on({
    mouseenter: function(){
        $(this).css("background-color", "darkgray");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightgray");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});