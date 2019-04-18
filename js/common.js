$(document).ready(function(){
    $(":reset").css("background-color", "red");
});

$("#button1").click(function(){
    $("#a").css("fontWeight","Bold")
});

$("#a").css("fontWeight","")

$("#button2").click(function(){
    $("#a").css("fontStyle",  "italic");
});

$("#button3").click(function(){
    $("#a").css("textDecoration", "underline");
});


function font() {
    var fontFromList = $("#listfont option:selected").text();
    $("#a").css("font-family", fontFromList);
 }

function Size() {
              
    var x = $("#size option:selected").val();
     $("#a").css("font-size", x );
    //  var x = document.getElementById("size").options[size.selectedIndex].value;
    //  document.getElementById("a").style.fontSize=x;

}