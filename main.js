
let slideIndex = 1;
let isScaled = false;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".img-store img");
    const dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "scale(1)";
        isScaled = false; // Reset scaling state
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    if (!isScaled) {
        slides[slideIndex - 1].style.transform = "scale(1.1)";
        dots[slideIndex - 1].classList.add("active");
        isScaled = true; // Update scaling state
    }
    else {
        slides[slideIndex - 1].style.transform = "scale(1)";
        dots[slideIndex - 1].classList.remove("active");
        isScaled = false; // Update scaling state
    }
}

function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }
  $("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function() {
    alert('The form was submitted successfully.')
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});