emailjs.init("k0VsNIXux_N388cf9");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_dsq6r13",
        "template_u2vjgmg",
        this
    ).then(function () {

        alert("Message Sent Successfully!");

        form.reset();

    }).catch(function (error) {

        alert("Failed to send message!");

        console.log(error);

    });

});
// =========================
// EmailJS Contact Form
// =========================

emailjs.init("k0VsNIXux_N388cf9");

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_dsq6r13",
            "template_u2vjgmg",
            this
        )
        .then(() => {
            alert("✅ Message Sent Successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("❌ Failed to send message!");
        });
    });
}