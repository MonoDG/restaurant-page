import menuObj from "./menu.json";
import VelociraptorImg from "./velociraptor.jpeg";
import TriceratopsImg from "./triceratops.jpeg";
import StegosaurusImg from "./stegosaurus.jpeg";
import PterodactylImg from "./pterodactyl.jpeg";
import BrachiosaurusImg from "./brachiosaurus.jpeg";

export default function createMenu() {
    const menu = document.createElement("section");
    menu.classList.add("menu")
    menu.setAttribute("id", "menu");
    const menuRecipes = menuObj.menu;

    const menuImages = {
        "./velociraptor.jpeg": VelociraptorImg,
        "./triceratops.jpeg": TriceratopsImg,
        "./stegosaurus.jpeg": StegosaurusImg,
        "./pterodactyl.jpeg": PterodactylImg,
        "./brachiosaurus.jpeg": BrachiosaurusImg
    }

    menuRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("menu-card");
        recipeCard.setAttribute("id", recipe.id)

        const recipeCardHeader = document.createElement("div");
        recipeCardHeader.classList.add("menu-card-header");

        const recipeCardTitle = document.createElement("h2");
        recipeCardTitle.textContent = recipe.title

        const image = new Image()
        image.src = menuImages[recipe.imageUrl];
        image.classList.add("menu-card-image")

        const recipeCardDescription = document.createElement("div")
        recipeCardDescription.classList.add("menu-card-description");

        const pDescription = document.createElement("p");
        pDescription.textContent = recipe.description;

        recipeCardDescription.appendChild(pDescription);
        recipeCardHeader.appendChild(recipeCardTitle);
        recipeCardHeader.appendChild(image);
        recipeCard.appendChild(recipeCardHeader);
        recipeCard.appendChild(recipeCardDescription);
        menu.appendChild(recipeCard);
    });

    return menu;
}