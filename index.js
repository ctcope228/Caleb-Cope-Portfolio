document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("toggle-header");
    const content = document.getElementById("projects-content");

    content.style.height = "0";
    content.style.transition = "height 0.3s ease-out";

    header.addEventListener("click", () => {
        if (content.style.height === "0px" || content.style.height === "0") {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = "0";
        }
    });
});
