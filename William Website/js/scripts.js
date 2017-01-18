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
        var difference = to - from.scrollTop;
        var perTick = (difference / duration) * 12;
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