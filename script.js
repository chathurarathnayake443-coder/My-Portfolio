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
