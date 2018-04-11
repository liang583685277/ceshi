$(document).ready(function(){
    var w = $(window).height();
    console.log(w);
    $(".content").css("height",w);
    $(".nav").css("top",w-66);
    $(".content_content").css("height",w-66-80);
});