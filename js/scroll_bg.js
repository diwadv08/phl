const header = document.querySelector(".site-navbar");
const heroSection = document.querySelector(".section-hero");

// Get hero section height
const heroHeight = heroSection.clientHeight;
let heroHeight_new=heroHeight-heroHeight/1.5;
console.log(header);
console.log(heroSection);
console.log(heroHeight);

if (window.scrollY > heroHeight_new) {
    header.classList.add("bg-header");
} else {
    header.classList.remove("bg-header");
}
window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-navbar");
    
    const heroSection = document.querySelector(".section-hero");

    // Get hero section height
    const heroHeight = heroSection.clientHeight;
    let heroHeight_new=heroHeight-heroHeight/1.5;
    console.log(header);
    console.log(heroSection);
    console.log(heroHeight);
    
    if (window.scrollY > heroHeight_new) {
        header.classList.add("bg-header");
    } else {
        header.classList.remove("bg-header");
    }
})