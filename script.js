gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".name", 
    { x: 300, opacity: 0 }, 
    {x: 0, duration: 1, opacity: 1}
);

gsap.fromTo(".highlight", 
    { x: -300, opacity: 0 }, 
    {x: 0, duration: 1, opacity: 1}
);

gsap.fromTo(".main-pic",
    { y: 300}, 
    {y: 0, duration: 1}
);

gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    end: "top 30%",
    scrub: true
  }
})

.to(".about-description", {
  x: -400,
  y: -100,
  ease: "none"
}, 0)

.to(".about-skills", {
  x: 100,
  y: 100,
  ease: "none"
}, 0);

gsap.to(".about-title", {
    scrollTrigger: {
        trigger: ".about-title",
        opacity: 0,
        toggleActions: "restart none none none",
        scrub: true
    },
    opacity: 1,
    x: 100,
    y: -10,
});

gsap.to(".skills-title", {
    scrollTrigger: {
        trigger: ".skills-title",
        opacity: 0,
        toggleActions: "restart none none none",
        scrub: true
    },
    opacity: 1,
    x: -100,
    y: -10, 
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 40%",
    end: "top 1%",
    toggleActions: "play reverse play reverse",
    scrub: 0.6
  }
});

tl.from("#contactCard", {
  scaleY: 0,
  duration: 5,
  ease: "power3.out"
})

.from("#contactCard > *", {
  opacity: 0,
  y: 30,
  stagger: 0.5,
  duration: 4,
  ease: "power3.out"
}, "-=0.3");

gsap.to(".project-card", {
    scrollTrigger: {
        trigger: ".project-section",
        start: "top 10%",
        opacity: 0,
        y: 100,
        toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    y: 100
    });


function sendMail() {
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_hraqjcs", "template_7mqd91j", params).then(alert("Email Sent!"))
}