$(document).ready(function() {
var typed = new Typed(".multiple-text", {
    strings: ["Get Counselling", "Get Medicine"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    dateTimeElement.textContent = ` ${date} ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

$('#mobile-menu').click(function() {
    $(this).toggleClass('active');
    $('.navbar').toggleClass('active');
});
});


