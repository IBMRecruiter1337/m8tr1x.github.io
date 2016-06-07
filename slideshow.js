var idx = 0;
carousel();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("imgSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
	
    idx++;
    if (idx > x.length) {idx = 1}    
    x[idx-1].style.display = "block";  
    setTimeout(carousel, 5000);    
}