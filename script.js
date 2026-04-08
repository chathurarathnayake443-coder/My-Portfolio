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
