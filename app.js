const home = document.querySelector("#home");

const tl = new TimelineMax();

tl.fromTo(home, 1.1, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut});
