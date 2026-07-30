const sr = ScrollReveal({
    distance: "35px",
    duration: 700,
    easing: "ease",
    opacity: 0,
    reset: false
});

sr.reveal(".section-title");

sr.reveal(".about-image", {
    origin: "left"
});

sr.reveal(".about-content", {
    origin: "right"
});

sr.reveal(".service-card", {
    interval: 120
});

sr.reveal(".feature-card", {
    interval: 100
});

sr.reveal(".faq-accordion");

sr.reveal(".contact-card", {
    origin: "left"
});

sr.reveal(".contact-form-card", {
    origin: "right"
});