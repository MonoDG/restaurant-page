import pageLoad from "./pageLoad";
import createHome from "./home";
import createMenu from "./menu";
import createFooter from "./footer";

pageLoad();

const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnContact = document.querySelector("#btn-contact");
const mainContent = document.querySelector(".main-content");

btnHome.classList.add("btn-active");

btnHome.addEventListener("click", () => {
    btnMenu.classList.remove("btn-active");
    btnContact.classList.remove("btn-active");
    btnHome.classList.add("btn-active");
    mainContent.replaceChildren();
    mainContent.appendChild(createHome());
    mainContent.appendChild(createFooter());
});

btnMenu.addEventListener("click", () => {
    btnHome.classList.remove("btn-active");
    btnContact.classList.remove("btn-active");
    btnMenu.classList.add("btn-active");
    mainContent.replaceChildren();
    mainContent.appendChild(createMenu());
    mainContent.appendChild(createFooter());
});