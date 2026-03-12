import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panelLeft = document.querySelector('#panel-left');
const panelRight = document.querySelector('#panel-right');

// Initial states - panels folded onto center
// Left panel starts rotated 180deg (folded in)
// Right panel starts rotated -180deg (folded in)
gsap.set(panelLeft, { rotateY: 180 });
gsap.set(panelRight, { rotateY: -180 });

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Smooth scrubbing
        markers: false
    }
});

// Physics & Material Realism Hooks
// 0.00 – 0.33 range
tl.to(panelLeft, {
    rotateY: -2.5, // Overshoot: go past 0 to simulate rebound
    ease: "power2.inOut",
    duration: 1,
    onStart: () => panelLeft.setAttribute('aria-hidden', 'false'),
    onReverseComplete: () => panelLeft.setAttribute('aria-hidden', 'true')
}, 0)
    .to(panelLeft, {
        rotateY: 0, // Settle back to 0
        ease: "back.out(1.7)",
        duration: 0.3
    }, 0.82);

// Phase 2: Unfolding the Right Panel
// 0.33 – 0.66 range
tl.to(panelRight, {
    rotateY: 2.5, // Overshoot
    ease: "power2.inOut",
    duration: 1,
    onStart: () => panelRight.setAttribute('aria-hidden', 'false'),
    onReverseComplete: () => panelRight.setAttribute('aria-hidden', 'true')
}, 0.5)
    .to(panelRight, {
        rotateY: 0, // Settle
        ease: "back.out(1.7)",
        duration: 0.3
    }, 1.32);

// Phase 3: Micro-settle and parallax
// 0.66 – 1.00 range
tl.to('.brochure-wrapper', {
    z: 50,
    rotateX: 2,
    ease: "power1.inOut",
    duration: 0.5
}, 1.5);

// Shadow intensity management based on rotation
// We want shadows to be darkest when panels are nearly closed (at start/reverse)
tl.fromTo('.panel-left .panel-shadow',
    { opacity: 0.1 },
    { opacity: 0, ease: "power2.inOut", duration: 1 },
    0
);

tl.fromTo('.panel-right .panel-shadow',
    { opacity: 0.15 },
    { opacity: 0, ease: "power2.inOut", duration: 1 },
    0.5
);

// Final flattening settle (Last 33% of scroll)
tl.to('.brochure', {
    gap: "0px", // Ensure panels touch perfectly
    scale: 1.01, // Micro scale for "spread" feel
    duration: 0.5,
    ease: "power1.inOut"
}, 1.5);
