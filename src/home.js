export default function createHome() {
    const home = document.createElement("section");
    home.classList.add("home")
    home.setAttribute("id", "home");

    const heroHeader = document.createElement("header");
    heroHeader.classList.add("hero");

    const heroImage = document.createElement("div");
    heroImage.classList.add("hero-image");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");

    const h1 = document.createElement("h1");
    h1.textContent = "Coffeesaurus";

    heroText.appendChild(h1);
    heroHeader.appendChild(heroImage);
    heroHeader.appendChild(heroText);

    const homeContent = document.createElement("section");
    homeContent.classList.add("home-content");

    const p = document.createElement("p");
    p.textContent = "Step into the prehistoric paradise of Coffeesaurus, where the enchanting world of dinosaurs meets the rich and invigorating world of coffee. Our café is a haven for coffee aficionados and dino-enthusiasts alike. Sip on our meticulously crafted coffee creations, each sip taking you on a journey through a myriad of flavors, from the bold \"Velociraptor Roast\" to the smooth \"Triceratops Mocha.\" As you savor your beverage, immerse yourself in the Mesozoic ambiance of our coffee shop, with life-sized dinosaur replicas and captivating murals that transport you back in time. At Coffeesaurus, we combine the magic of coffee with the awe-inspiring wonder of dinosaurs to create an experience like no other. Come and awaken your taste buds and your inner paleontologist at Coffeesaurus today!"

    homeContent.appendChild(p);

    home.appendChild(heroHeader);
    home.appendChild(homeContent);

    return home;
}