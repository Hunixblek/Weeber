var header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})
//Animaciones pagina HOME
let timeline = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


timeline.from(".an1", {
    x:-1000,
    duration: 3,
    ease: "power3.out",
}
);

timeline.from(".an2", {
    x:-1000,
    duration: 3,
    ease: "power3.out",
},
"1"
);

timeline.from(".btn-vmore", {
    x:-500,
    duration: 3,
    ease: "power3.out",
},
"1"
);

timeline.from(".imagen-slider", {
    x:800,
    duration: 3,
    ease: "power3.out",
},
"2"
);

timeline.from(".text-abajo", {
    x:950,
    duration: 3,
    ease: "power3.out",
},
"3"
);

timeline.from(".logo", {
    y:-80,
    duration: 3,
    ease: "power3.out",
},
"1.5"
);

gsap.from(".texto-derecho", {
    scrollTrigger: ".texto-derecho",
    x: -400,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".svg-host", {
    scrollTrigger: ".svg-host",
    x: -400,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".info-dominio", {
    scrollTrigger: ".info-dominio",
    x: -400,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".dominio-img", {
    scrollTrigger: ".dominio-img",
    x: 400,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".texto-sub", {
    scrollTrigger: ".texto-sub",
    x: 800,
    rotation: -5,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".texto-sub2", {
    scrollTrigger: ".texto-sub2",
    x: -400,
    rotation: 5,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".txt-redes", {
    scrollTrigger: ".txt-redes",
    x: -50,
    rotation: 5,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".img-s", {
    scrollTrigger: ".img-s",
    x: -50,
    rotation: 5,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".txt-mexi", {
    scrollTrigger: ".txt-mexi",
    y: 20,
    duration: 3,
    ease: "power3.out",
});

gsap.from(".underline-hover-effect", {
    scrollTrigger: ".underline-hover-effect",
    y: 200,
    duration: 3,
    ease: "power3.out",
});

gsap.from("#svg1", {
    fillOpacity: 0.001,
    fill: "#A26EEA",
    duration: 3,
    ease: "power3.out",
},"5");

let timeline2 = gsap.timeline();
timeline2.from(".ani-txtabo", {
    x:-1000,
    duration: 2,
    ease: "power3.out",
});
timeline2.from(".ani-txtabo2", {
    x:-1500,
    duration: 2,
    ease: "power3.out",
},"1");

gsap.from(".conoce", {
    scrollTrigger: ".conoce",
    x: 400,
    duration: 3,
    ease: "power3.out",
});
gsap.from(".conoce-txt", {
    scrollTrigger: ".conoce",
    x: -400,
    duration: 3,
    ease: "power3.out",
});
gsap.from(".about-info2", {
    scrollTrigger: ".about-info2",
    x: -400,
    rotation: 10,
    duration: 3,
    ease: "power3.out",
});
gsap.from(".info-extra", {
    scrollTrigger: ".info-extra",
    x: -400,
    duration: 3,
    ease: "power3.out",
});
timeline2.from(".txt-servicios1", {
    x:500,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");
timeline2.from(".txt-servicios2", {
    x:560,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");
timeline2.from(".txt-contacto", {
    x:560,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");
timeline2.from(".txt-contacto2", {
    x:60,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");
timeline2.from(".txt-avisos", {
    x:560,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");
timeline2.from(".txt-avisos2", {
    x:60,
    opacity: 0.01,
    duration: 2,
    ease: "power3.out",
},"1");



