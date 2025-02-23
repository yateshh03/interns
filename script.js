var menu = document.querySelector("#navbar #menu")
var cross = document.querySelector("#full i")



menu.addEventListener("click", () => {

    var tl = gsap.timeline()

    tl.to("#full", {
        left: 0,
        duration: 0.5,
    })

    tl.from("#full h4", {
        x: -150,
        duration: 0.7,
        stagger: 0.28,
        opacity: 0
    })

    tl.from("#full i", {
        opacity: 0

    })
})

cross.addEventListener("click", () => {
    var tl = gsap.timeline();

    tl.to("#full", {
        left: "-100%",
        duration: 0.6,
        ease: "power2.inOut"
    });

});