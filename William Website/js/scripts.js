
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
