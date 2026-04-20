//
//     const navBtn = document.querySelector('#ham-icon');
//     const navList = document.querySelector('.nav-list');
//
//     navBtn.addEventListener('click', function() {
//     navList.classList.toggle('active');
// })

document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector('#ham-icon');
    const navList = document.querySelector('.nav-list');

    if (navBtn && navList) {
        navBtn.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    }
});

document.getElementById("submit-btn").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("New Message from Portfolio");

    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    window.location.href = `mailto:chathurarathnayake971@gmail.com?subject=${subject}&body=${body}`;
});

const cards = [
    document.getElementById('card-1'),
    document.getElementById('card-2'),
    document.getElementById('card-3')
];

let current = 0;

setInterval(() => {
    // drop current card to back
    cards[current].style.zIndex = 1;

    // bring next card to front
    current = (current + 1) % cards.length;
    cards[current].style.zIndex = 10;
}, 2000); // every 2s matches your animation-delay interval