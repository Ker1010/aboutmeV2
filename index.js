// Get the number of words in the document
var text = document.body.innerText;
var wordCount = text.split(' ').length;

// Set the average reading speed (in words per minute)
var readingSpeed = 200;

// Calculate the estimated read time
var minute = wordCount / readingSpeed;

document.getElementById("read-time").getElementsByTagName("span")[0].innerHTML = minute;

function show() {
 
    /* Access image by id and change
    the display property to block*/
    document.getElementById('image')
            .style.display = "block";

    document.getElementById('btnID')
            .style.display = "none";
}

$(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
   });
