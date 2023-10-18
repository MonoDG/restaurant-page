export default function createNav() {
    const nav = document.createElement("section");
    nav.classList.add("nav");

    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    const liMenu = document.createElement("li");
    const liContact = document.createElement("li");

    const btnHome = document.createElement("button");
    const btnMenu = document.createElement("button");
    const btnContact = document.createElement("button");

    btnHome.setAttribute("id", "btn-home");
    btnMenu.setAttribute("id", "btn-menu");
    btnContact.setAttribute("id", "btn-contact");

    btnHome.textContent = "Home";
    btnMenu.textContent = "Menu";
    btnContact.textContent = "Contact";

    liHome.appendChild(btnHome);
    liMenu.appendChild(btnMenu);
    liContact.appendChild(btnContact);

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    nav.appendChild(ul);

    return nav;
}