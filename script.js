const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//-----Scroll
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    tigger: ".intro",
    start: "top top",
    end: "+=1200",
    scrub: 2,

    preventOverlaps: true,
    pinSpacing: true,
    pin: ".header",
    // pinnedContainer: ".front-section",
    anticipatePin: 1,
    toggleActions: "play none none restart ",
    markers: false,
  },
});

tl.to(".card-1", {
  y: -150,
  duration: 10,
  autoAlpha: 0,
  ease: "power1",
});

tl.to(".card-2", {
  y: -150,
  delay: 10,
  duration: 12,
  autoAlpha: 0,

  ease: "power1",
});

tl.to(".card-3", {
  y: -150,
  delay: 10,
  duration: 12,
  autoAlpha: 0,
  ease: "power1",
});
tl.to(".card-4", {
  y: -150,
  delay: 10,
  duration: 12,
  autoAlpha: 0,
  ease: "power1",
});
tl.to(".card-5", {
  y: -150,
  duration: 12,
  autoAlpha: 0,
  ease: "power1",
});

// gsap.to(".card-1", {
//   y: -250,
//   duration: 2,
//   autoAlpha: 0,
//   scrollTrigger: {
//     tigger: ".card-1",
//     start: "bottom center",
//     end: "+=50",
//     scrub: 2,
//     // toggleClass: "red",

//     toggleActions: "play restart reverse ",
//     markers: true,
//   },
// });

// gsap.to(".fade-in2", {
//   y: -652,
//   duration: 8,
//   autoAlpha: 1,

//   scrollTrigger: {
//     tigger: ".fade-in2",
//     start: "top -7%",
//     end: "top 18%",
//     scrub: 2,

//     toggleActions: "play restart reverse ",
//   },
// });
// gsap.to(".fade-in3", {
//   x: -652,
//   duration: 5,
//   scrollTrigger: {
//     tigger: ".fade-in3",
//     start: "top -12%",
//     end: "top 25%",
//     scrub: 2,

//     toggleActions: "play restart reverse ",
//   },
// });
// gsap.to(".fade-in4", {
//   x: -652,
//   duration: 5,
//   scrollTrigger: {
//     tigger: ".fade-in4",
//     start: "top -18%",
//     end: "top 30%",
//     scrub: 2,

//     toggleActions: "play restart reverse ",
//   },
// });
