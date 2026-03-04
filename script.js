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