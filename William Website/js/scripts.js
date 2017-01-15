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
window.addEventListener("scroll", scrollingPage, false);
document.getElementsByClassName("page-scroll")[0].addEventListener("click", function () {
    element = document.getElementById("one");
    scrollTo(document.body, element.offsetTop, 800);
});

function scrollingPage(e) {
    // do epic stuff    
}


function scrollTo(from, to, duration) {
    if (duration <= 0)
    {
        return;
    }
    else
    {
        //alert("To: " + to + " From: " +from.scrollTop);
        var difference = to - from.scrollTop;
        //alert("Difference"+ difference + " Duration: " + duration);
        //        var perTick = (difference / duration) * 10;
        var perTick = (difference / duration) * 12;
       //alert("perTick"+ perTick);
        setTimeout(function() {
            from.scrollTop = from.scrollTop + perTick;
            if (from.scrollTop === to) 
            {
                return;
            }
            else{            
                scrollTo(from, to, duration - 8);
            }
        }, 12);
    }
    
}