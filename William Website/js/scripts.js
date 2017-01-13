/*
$(document).ready(function(){

     $('a.page-scroll').on("click",function(){
      var target = $(this.hash);
      //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      //if (target.length) {
        $('html, body').animate({
         // scrollTop: target.offset().top
                   scrollTop: $(this.hash).offset().top
        }, 1000);
        return false;
      //}
     });
});
*/

document.getElementsByClassName("page-scroll")[0].addEventListener("click", function(){
    element = document.getElementById("one");
    scrollTo(document.body, element.offsetTop, 800);
});


function scrollTo(element, to, duration) {
    if (duration <= 0)
    {
        return;
    }
    else
    {
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;
        setTimeout(function() {
            console.log(element.scrollTop);
            element.scrollTop = element.scrollTop + perTick;
                        console.log(element.scrollTop);

            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }
    
}