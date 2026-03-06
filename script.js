
window.addEventListener("load", () => {

    const loaderTL = gsap.timeline({ defaults: { ease: "power2.out" } });

    loaderTL
        .from(".loader-text", { y: 40, opacity: 0, duration: 1 })

        .to(".loader-text", { x: "-45vw", y: "-45vh", scale: 0.6, duration: 1 })

        .to(".loader", {
            opacity: 0,
            duration: 0.8,
            display: "none",
            onComplete: () => document.body.classList.remove("preload")
        }, "-=0.4")

        .from(".main-pic", { 
          y: 80, opacity: 0, 
          duration: 1 }, 
          "-=0.4")

        .from(".highlight", { 
          x: -100, 
          opacity: 0, 
          duration: 1 }, 
          "-=0.8")

        .from(".name", { 
          x: 100, 
          opacity: 0, 
          duration: 1 },
          "-=0.8");
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    document.getElementById('progress-bar').style.width = (scrollTop / docHeight) * 100 + '%';
});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        end: "top 30%",
        scrub: true
    }
})
.to(".about-description", { x: -400, y: -100, ease: "none" }, 0)
.to(".about-skills", { x: 100, y: 100, ease: "none" }, 0);

gsap.to(".about-title", { 
  scrollTrigger: { 
    trigger: ".about-title", 
    opacity: 0, 
    toggleActions: "restart none none none", 
    scrub: true }, opacity: 1, x: 100, y: -10, }); 
    
    gsap.to(".skills-title", { 
      scrollTrigger: { 
        trigger: ".skills-title", 
        opacity: 0, 
        toggleActions: "restart none none none", 
        scrub: true 
      }, 
      opacity: 1, x: -100, y: -10, 
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 40%",
        end: "top 1%",
        toggleActions: "play reverse play reverse",
        scrub: 0.6
    }
})
.from("#contactCard", { scaleY: 0, duration: 1.5, ease: "power3.out" })
.from("#contactCard > *", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    duration: 1.2,
    ease: "power3.out"
}, "-=1");

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_hraqjcs", "template_7mqd91j", params)
        .then(() => alert("Email Sent!"))
        .catch(err => alert("Error sending email: " + err));
}